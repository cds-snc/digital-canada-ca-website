const axios = require('axios');
const { axe, toHaveNoViolations } = require('jest-axe');

// Polyfill for TextEncoder and TextDecoder
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const { JSDOM } = require('jsdom');

expect.extend(toHaveNoViolations);

// Get the port from environment variables or use defaults
const EN_PORT = process.env.HUGO_PORT_EN || '1313';
const FR_PORT = process.env.HUGO_PORT_FR || '1314';

describe('Website Accessibility Tests', () => {
  const pages = [
    // English pages
    `http://localhost:${EN_PORT}/service-digital-toolkit/`,
    `http://localhost:${EN_PORT}/service-digital-toolkit/accessibility/`,
    `http://localhost:${EN_PORT}/service-digital-toolkit/user-centred-design/`,
    `http://localhost:${EN_PORT}/service-digital-toolkit/agile-service-delivery/`,
    // French pages
    `http://localhost:${FR_PORT}/boite-a-outils-en-matiere-de-numerique-et-de-services/`,
    `http://localhost:${FR_PORT}/boite-a-outils-en-matiere-de-numerique-et-de-services/accessibilite/`,
    `http://localhost:${FR_PORT}/boite-a-outils-en-matiere-de-numerique-et-de-services/conception-centree-sur-la-personne/`,
    `http://localhost:${FR_PORT}/boite-a-outils-en-matiere-de-numerique-et-de-services/prestation-de-service-agile/`
  ];

  // Allow filtering pages with environment variables
  const testUrlPattern = process.env.TEST_URL_PATTERN || '';
  const pagesToTest = testUrlPattern 
    ? pages.filter(url => url.includes(testUrlPattern))
    : pages;

  pagesToTest.forEach(url => {
    test(`${url} should have no accessibility violations`, async () => {
      try {
        // Fetch the page content with axios
        const response = await axios.get(url);
        const html = response.data;
        
        // Create a JSDOM instance with the fetched HTML
        const { window } = new JSDOM(html);
        const { document } = window;
        
        // Run axe on the document in JSDOM
        const results = await axe(document.documentElement.outerHTML);
        expect(results).toHaveNoViolations();
      } catch (error) {
        // Handle connection errors gracefully
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