var generators = require('yeoman-generator');
var shelljs = require('shelljs');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  // prompting: function () {
  //   shelljs.echo(yosay(chalk.yellow('Welcome! Let us help you get started with an automation framework')));
  //   return this.prompt([{
  //     type    : 'list',
  //     name    : 'framework',
  //     message : 'What framework would you prefer to use?',
  //     choices:['cucumber'],
  //     default : 'cucumber'
  //   }]).then(function (answers) {
  //     this.props = answers;
  //   }.bind(this));
  // },
  // writing: function () {
  //   if(this.props.framework === 'cucumber') {
  //     this.sourceRoot('node_modules/e2e_framework/lib/templates');
  //     this.npmInstall(['e2e_framework@https://github.com/gd46/e2e_framework']);
  //   }
  // },
  initializing: function () {

    this.copy("env.js", "test/e2e/features/support/env.js");
    this.copy("hooks.js", "test/e2e/features/support/hooks.js");

    this.copy("expected_conditions.js", "test/e2e/includes/expected_conditions.js");
    this.copy("external_globals.js", "test/e2e/includes/external_globals.js");
    this.copy("internal_globals.js", "test/e2e/includes/internal_globals.js");
    this.copy("page_objects.js", "test/e2e/includes/page_objects.js");

    this.copy("core.js", "test/e2e/plugins/core.js");

    this.copy("e2e_framework_config.js", "test/e2e/config/e2e_framework_config.js");

    this.copy("util.js", "test/e2e/utilities/util.js");

    this.copy("cucumber.conf.js", "cucumber.conf.js");
  },
  install: function () {
    this.npmInstall(['chai@^3.5.0'], {'saveDev': true});
    this.npmInstall(['chai-as-promised@^5.3.0'], {'saveDev': true});
    this.npmInstall(['lodash@^4.13.1'], {'saveDev': true});
    this.npmInstall(['cucumber@1.3.0'], {'saveDev': true});
    this.npmInstall(['protractor@3.3.0'], {'saveDev': true});
    this.npmInstall(['protractor-cucumber-framework@^0.6.0'], {'saveDev': true});
  }
});