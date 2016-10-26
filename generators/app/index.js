var generators = require('yeoman-generator');
var shelljs = require('shelljs');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  paths: function () {
    this.sourceRoot('node_modules/e2e_framework/lib/templates');
  },
  initializing: function () {
  },
  install: function () {
    this.npmInstall(['e2e_framework@https://github.com/gd46/e2e_framework']);
    // this.npmInstall(['chai@^3.5.0'], {'saveDev': true});
    // this.npmInstall(['chai-as-promised@^5.3.0'], {'saveDev': true});
    // this.npmInstall(['lodash@^4.13.1'], {'saveDev': true});
    // this.npmInstall(['cucumber@1.3.0'], {'saveDev': true});
    // this.npmInstall(['protractor@3.3.0'], {'saveDev': true});
    // this.npmInstall(['protractor-cucumber-framework@^0.6.0'], {'saveDev': true});
  },
  prompting: function () {
    var packagejsonExists = this.fs.exists('package.json');
    if(!packagejsonExists) {
        shelljs.echo(yosay(chalk.yellow('You do not have a package.json yet, we will help you generate one')));
        return this.prompt([{
          type    : 'input',
          name    : 'name',
          message : 'name',
          default : this.appname // Default to current folder name
        }, {
          type  : 'input',
          name  : 'version',
          message : 'version',
          default: '1.0.0'
        }, {
          type  : 'input',
          name  : 'description',
          message : 'description',
          default: ''
        }, {
          type  : 'input',
          name  : 'main',
          message : 'main',
          default: 'index.js'
        }, {
          type  : 'input',
          name  : 'version',
          message : 'version',
          default: '1.0.0'
        }, {
          type  : 'input',
          name  : 'author',
          message : 'author',
          default: ''
        }, {
          type  : 'input',
          name  : 'license',
          message : 'license',
          default: 'MIT'
        }]).then(function (answers) {
          this.props = answers;
        }.bind(this));
    }
  },
  end: function () {

    this.copy("app/env.js", "test/e2e/features/support/env.js");
    this.copy("app/hooks.js", "test/e2e/features/support/hooks.js");

    this.copy("app/expected_conditions.js", "test/e2e/includes/expected_conditions.js");
    this.copy("app/external_globals.js", "test/e2e/includes/external_global.js");
    this.copy("app/internal_globals.js", "test/e2e/includes/internal_globals.js");
    this.copy("app/page_objects.js", "test/e2e/includes/page_objects.js");

    this.copy("app/core.js", "test/e2e/plugins/core.js");

    this.copy("app/e2e_framework_config.js", "test/e2e/config/e2e_framework_config.js");

    this.copy("app/util.js", "test/e2e/utilities/util.js");

    this.copy("app/cucumber.conf.js", "cucumber.conf.js");


    // TODO: we should just write the file and not care if there is one there
    var packagejsonExists = this.fs.exists('package.json');

    if(!packagejsonExists) {
      this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          {
            name: this.props.name,
            version: this.props.version,
            description: this.props.description,
            main: this.props.main,
            author: this.props.author, 
            license: this.props.license
          }
      );
    }
  }
});