var generators = require('yeoman-generator');
module.exports = generators.Base.extend({

  initializing: function () {
    // Set up automation framework files and folders
    this.copy("env.js", "test/support/env.js");
    this.copy("hooks.js", "test/support/hooks.js");

    this.copy("expected_conditions.js", "test/includes/expected_conditions");
    this.copy("external_globals.js", "test/includes/external_global");
    this.copy("internal_globals.js", "test/includes/internal_globals");
    this.copy("page_objects.js", "test/includes/page_objects");

    
    this.copy("cucumber.conf.js", "cucumber.conf.js");
  }
});