var generators = require('yeoman-generator');
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
  }
});