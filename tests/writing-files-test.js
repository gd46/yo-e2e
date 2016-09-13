'use strict';

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    spies = require('chai-spies'),
    helpers = require('yeoman-test'),
    path = require('path'),
    assert = require('yeoman-assert');

chai.use(spies);

describe('Writing files', function() {
  before(function(){
    return helpers.run(path.join(__dirname, '../generators/app')).toPromise();
  });

  it('should write test/e2e/features/support/env.js', function() {
    assert.file('test/e2e/features/support/env.js');
  });
  it('should write test/e2e/features/support/hooks.js', function() {
    assert.file('test/e2e/features/support/hooks.js');
  });
});