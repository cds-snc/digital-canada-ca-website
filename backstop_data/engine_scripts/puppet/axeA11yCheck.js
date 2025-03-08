/**
 * This script performs accessibility tests using axe-core
 * Add this file to backstopJS engine_scripts/puppet directory
 */
module.exports = async (page, scenario) => {
  // Inject axe-core library
  await require('axe-core/axe.min.js');
  await page.addScriptTag({path: require.resolve('axe-core/axe.min.js')});

  // Run accessibility tests
  const results = await page.evaluate(async () => {
    return await window.axe.run(document);
  });

  // Log violations in the console and store results
  console.log(`\nAccessibility check for scenario: ${scenario.label}`);
  
  if (results.violations.length > 0) {
    console.log(`\n${results.violations.length} accessibility violation(s) found:`);
    results.violations.forEach((violation, index) => {
      console.log(`\n${index + 1}. ${violation.help} - ${violation.impact} impact`);
      console.log(`   WCAG: ${violation.tags.filter(tag => tag.includes('wcag')).join(', ')}`);
      console.log(`   Description: ${violation.description}`);
      console.log(`   Help URL: ${violation.helpUrl}`);
      console.log('   Affected nodes:');
      violation.nodes.forEach((node, nodeIndex) => {
        console.log(`     ${nodeIndex + 1}. ${node.html}`);
      });
    });
  } else {
    console.log('No accessibility violations found');
  }

  // Store results in a global object to be retrieved by other scripts if needed
  if (!global.backstopjs) {
    global.backstopjs = {};
  }
  global.backstopjs[scenario.label] = {
    a11y: results
  };
};