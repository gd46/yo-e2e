var generators = require('yeoman-generator');
var shell = require('shelljs');
module.exports = generators.Base.extend({

  initializing: function () {
    // Set up automation framework files and folders
    this.copy("_env.js", "test/e2e/support/env.js");
    this.copy("_hooks.js", "test/e2e/support/hooks.js");

    this.copy("_expected_conditions.js", "test/e2e/includes/expected_conditions.js");
    this.copy("_external_globals.js", "test/e2e/includes/external_global.js");
    this.copy("_internal_globals.js", "test/e2e/includes/internal_globals.js");
    this.copy("_page_objects.js", "test/e2e/includes/page_objects.js");

    this.copy("_core.js", "test/e2e/plugins/core.js");

    this.copy("_e2e_framework_config.js", "test/e2e/config/e2e_framework_config.js");
    this.copy("_util", "test/e2e/utilities/util.js");

    this.copy("_cucumber.conf.js", "cucumber.conf.js");
    var packagejsonExists = this.fs.exists('package.json');
    if(!packagejsonExists) {
        this.fs.copyTpl(
              this.templatePath('_package.json'),
              this.destinationPath('package.json')
          );
    //     console.log('No package.json');
    //     shell.exec('npm init', function(err, stdout, stderr) {
    //       if (err) {
    //         console.error('error',err);
    //         return;
    //       }
    //       console.log('stderr', stderr);
    //       console.log('success',stdout);
    //     });
    }
  },

  install: function () {
     this.npmInstall(['chai@^3.5.0'], { 'saveDev': true });
     this.npmInstall(['chai-as-promised@^5.3.0'], { 'saveDev': true });
     this.npmInstall(['lodash@^4.13.1'], { 'saveDev': true });
     this.npmInstall(['cucumber@1.3.0'], { 'saveDev': true });
     this.npmInstall(['protractor@3.3.0'], { 'saveDev': true });
     this.npmInstall(['protractor-cucumber-framework@^0.6.0'], { 'saveDev': true });
  },
});