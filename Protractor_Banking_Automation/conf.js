var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var winston=require('winston');
// An example configuration file.
exports.config = {
		
//  seleniumAddress:'http://localhost:4444/wd/hub',
  directConnect:true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  suites:{
	  customer:['./src/SpecFiles/E2EFlow.js'],
	  manager:['./src/SpecFiles/ManagerE2EFlow.js']
  },
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots',
//          takeScreenshots:true,
          takeScreenshotsOnlyOnFailures: true,
        })
        );
     }, 
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
