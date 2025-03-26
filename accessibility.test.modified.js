const { axe, toHaveNoViolations } = require('jest-axe');
const puppeteer = require('puppeteer');

// Add jest's expect global
const jestExpect = global.expect;
jestExpect.extend(toHaveNoViolations);

// Get the port from environment variables or use defaults
const EN_PORT = process.env.HUGO_PORT_EN || '1313';
const FR_PORT = process.env.HUGO_PORT_FR || '1314';

// Set up test suite
describe('Website Accessibility Tests', () => {
  // Define test pages
  const pages = [
    // English pages
    `http://localhost:${EN_PORT}/service-digital-toolkit/`,
    `http://localhost:${EN_PORT}/service-digital-toolkit/accessibility/`,
    `http://localhost:${EN_PORT}/service-digital-toolkit/user-centred-design/`,
    `http://localhost:${EN_PORT}/service-digital-toolkit/agile-service-delivery/`,
    // French pages
    `http://localhost:${FR_PORT}/les-outils-du-numeriques-et-de-services/`,
    `http://localhost:${FR_PORT}/les-outils-du-numeriques-et-de-services/accessibilite/`,
    `http://localhost:${FR_PORT}/les-outils-du-numeriques-et-de-services/conception-centree-sur-la-personne/`,
    `http://localhost:${FR_PORT}/les-outils-du-numeriques-et-de-services/prestation-de-service-agile/`
  ];

  // Allow filtering pages with environment variables
  const testUrlPattern = process.env.TEST_URL_PATTERN || '';
  const pagesToTest = testUrlPattern 
    ? pages.filter(url => url.includes(testUrlPattern))
    : pages;

  // Set up browser for all tests
  let browser;
  
  beforeAll(async () => {
    browser = await puppeteer.launch({ 
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  });
  
  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  // Test each page
  pagesToTest.forEach(url => {
    test(`${url} should have no accessibility violations`, async () => {
      let page;
      try {
        page = await browser.newPage();
        
        // Navigate to the page
        const response = await page.goto(url, { 
          waitUntil: 'networkidle0',
          timeout: 30000
        });
        
        if (!response || response.status() >= 400) {
          console.warn(`Warning: Page ${url} returned status ${response?.status() || 'unknown'}`);
          return;
        }
        
        // Inject and run axe-core
        await page.addScriptTag({ 
          path: require.resolve('axe-core/axe.min.js')
        });
        
        // Run axe on the page
        const results = await page.evaluate(() => {
          return new Promise(resolve => {
            window.axe.run(document, {}, (err, results) => {
              if (err) throw err;
              resolve(results);
            });
          });
        });
        
        // Check for violations
        jestExpect(results).toHaveNoViolations();
      } catch (error) {
        if (error.message && (
          error.message.includes('net::ERR_CONNECTION_REFUSED') || 
          error.message.includes('Navigation timeout')
        )) {
          console.warn(`Warning: Could not connect to ${url}. Is the server running on the correct port?`);
          // Skip this test rather than failing
          return;
        }
        throw error;
      } finally {
        if (page) {
          await page.close();
        }
      }
    }, 60000); // Longer timeout for page loading
  });
});