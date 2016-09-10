var generators = require('yeoman-generator');
var shell = require('shelljs');
module.exports = generators.Base.extend({

  initializing: function () {
    // Set up automation framework files and folders
    this.copy("env.js", "test/support/env.js");
    this.copy("hooks.js", "test/support/hooks.js");

    this.copy("expected_conditions.js", "test/includes/expected_conditions.js");
    this.copy("external_globals.js", "test/includes/external_global.js");
    this.copy("internal_globals.js", "test/includes/internal_globals.js");
    this.copy("page_objects.js", "test/includes/page_objects.js");

    
    this.copy("cucumber.conf.js", "cucumber.conf.js");
    var packagejsonExists = this.fs.exists('package.json');
    if(!packagejsonExists) {
        // this.fs.copyTpl('package.json', 'package.json');
        // this.fs.copyTpl(
        //       this.templatePath('package.json'),
        //       this.destinationPath('package.json')
        //   );
        console.log('No package.json');
        shell.exec('npm init', function(err, stdout, stderr) {
          if (err) {
            console.error('error',err);
            return;
          }
          console.log('stderr', stderr);
          console.log('success',stdout);
        });
    }
  },

  install: function () {
     // this.npmInstall(['cucumber'], { 'saveDev': true });
  },
});