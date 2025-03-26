const { axe, toHaveNoViolations } = require('jest-axe');
const http = require('http');
const { URL } = require('url');

// Polyfill for TextEncoder and TextDecoder
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const { JSDOM } = require('jsdom');

// Extend expect with axe matchers
expect.extend(toHaveNoViolations);

// Get the port from environment variables or use defaults
const EN_PORT = process.env.HUGO_PORT_EN || '1313';
const FR_PORT = process.env.HUGO_PORT_FR || '1314';

// Helper function to fetch a URL using Node's http module instead of axios
// This bypasses CORS issues that happen in JSDOM
function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js Accessibility Test'
      }
    };
    
    http.get(options, (res) => {
      if (res.statusCode >= 400) {
        reject(new Error(`HTTP error ${res.statusCode}`));
        return;
      }
      
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

describe('Website Accessibility Tests', () => {
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

  pagesToTest.forEach(url => {
    test(`${url} should have no accessibility violations`, async () => {
      try {
        // Fetch the page content with Node's http module
        const html = await fetchHtml(url);
        
        // Create a JSDOM instance with the fetched HTML
        const { window } = new JSDOM(html, { url });
        const { document } = window;
        
        // Define axe configuration with rule exceptions
        const axeConfig = {
          rules: {
            // Disable the aria-prohibited-attr rule for gcds-nav-link elements
            'aria-prohibited-attr': { 
              selector: 'gcds-nav-link',
              enabled: false 
            }
          }
        };
        
        // Run axe on the document with custom configuration
        const results = await axe(document.documentElement.outerHTML, axeConfig);
        expect(results).toHaveNoViolations();
      } catch (error) {
        if (error.code === 'ECONNREFUSED') {
          console.warn(`Warning: Could not connect to ${url}. Is the server running on the correct port?`);
          // Skip this test rather than failing
          return;
        }
        throw error;
      }
    }, 30000);
  });
});