var generators = require('yeoman-generator');
var shelljs = require('shelljs');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  prompting: function () {
    shelljs.echo(yosay(chalk.yellow('Welcome! Let us help you get started with an automation framework')));
    return this.prompt([{
      type    : 'list',
      name    : 'framework',
      message : 'What framework would you prefer to use?',
      choices:['cucumber'],
      default : 'cucumber'
    }]).then(function (answers) {
      this.props = answers;
    }.bind(this));
  },
  writing: function () {
    if(this.props.framework === 'cucumber') {
      this.sourceRoot('node_modules/e2e_framework/lib/templates');
      this.npmInstall(['e2e_framework@https://github.com/gd46/e2e_framework']);
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
  }
});