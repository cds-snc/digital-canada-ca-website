const axios = require('axios');

// Get the port from environment variables or use defaults
const EN_PORT = process.env.HUGO_PORT_EN || '1313';
const FR_PORT = process.env.HUGO_PORT_FR || '1314';

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

// Process each page and see if it's available
async function checkPagesAvailability() {
  let allAvailable = true;
  
  for (const url of pagesToTest) {
    try {
      console.log(`Testing ${url}...`);
      
      // Fetch the page
      const response = await axios.get(url, { 
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36'
        }
      });
      
      if (response.status >= 200 && response.status < 300) {
        console.log(`✓ Page available: ${url}`);
      } else {
        allAvailable = false;
        console.error(`✗ Error for ${url}: Status ${response.status}`);
      }
    } catch (error) {
      allAvailable = false;
      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        console.error(`✗ Could not connect to ${url}. Is the server running on the correct port?`);
      } else {
        console.error(`✗ Error testing ${url}: ${error.message}`);
      }
    }
  }
  
  return allAvailable;
}

// Run tests and exit with appropriate code
checkPagesAvailability()
  .then(allAvailable => {
    if (allAvailable) {
      console.log('\nAll pages are available!');
      console.log('\nTo run the actual accessibility test, you need to:');
      console.log('1. Ensure both Hugo servers are running (on ports 1313 and 1314)');
      console.log('2. Then run: npm run a11y:test');
      process.exit(0);
    } else {
      console.log('\nSome pages are not available. Make sure both Hugo servers are running:');
      console.log(`- English server on port ${EN_PORT}: hugo server -D -p ${EN_PORT}`);
      console.log(`- French server on port ${FR_PORT}: hugo server -D -p ${FR_PORT}`);
      process.exit(1);
    }
  })
  .catch(error => {
    console.error(`\nUnexpected error: ${error.message}`);
    process.exit(1);
  });