'use strict';

var chai = require('chai'),
    helpers = require('yeoman-test'),
    path = require('path'),
    assert = require('yeoman-assert');

describe('Writing generated ', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app')).toPromise();
  });

  describe('Cucumber files:', function () {
    it('should write test/e2e/features/support/env.js', function () {
      assert.file('test/e2e/features/support/env.js');
    });
    it('should write test/e2e/features/support/hooks.js', function () {
      assert.file('test/e2e/features/support/hooks.js');
    });
    it('should write cucumber.conf.js', function () {
      assert.file('cucumber.conf.js');
    })
  });

  describe('includes files:', function () {
    it('should write test/e2e/includes/expected_conditions.js', function () {
      assert.file('test/e2e/includes/expected_conditions.js');
    });
    it('should write test/e2e/includes/external_globals.js', function () {
      assert.file('test/e2e/includes/external_globals.js');
    });
    it('should write test/e2e/includes/internal_globals.js', function () {
      assert.file('test/e2e/includes/internal_globals.js');
    });
    it('should write test/e2e/includes/page_objects.js', function () {
      assert.file('test/e2e/includes/page_objects.js');
    });
  });

  describe('plugin files:', function () {
    it('should write test/e2e/plugins/core.js', function () {
      assert.file('test/e2e/plugins/core.js');
    });
  });

  describe('Config files:', function () {
    it('should write test/e2e/config/e2e_framework_config.js', function () {
      assert.file('test/e2e/config/e2e_framework_config.js')
    });
  });

  describe('Utilities files:', function () {
    it('should write test/e2e/utilities/util.js', function () {
      assert.file('test/e2e/utilities/util.js')
    });
  });
});
