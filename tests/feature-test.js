'use strict';

var chai = require('chai'),
    helpers = require('yeoman-test'),
    path = require('path'),
    assert = require('yeoman-assert');


describe('Generate feature ', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
    .toPromise();
  });

  describe('with default prompt answers:', function () {
  	beforeEach(function () {
	    return helpers.run(path.join(__dirname, '../generators/feature'))
	    .toPromise();
	  });

    it('should write test/e2e/features/test.feature', function () {
      assert.file('test/e2e/features/' + this.appname + '.feature');
    });
  });

  describe('with feature file name:', function () {
  	beforeEach(function () {
	    return helpers.run(path.join(__dirname, '../generators/feature'))
	    .withPrompts({ feature: 'test' })
	    .toPromise();
	  });

    it('should write test/e2e/features/test.feature', function () {
      assert.file('test/e2e/features/test.feature');
    });
  });

  describe('with file directory:', function () {
  	beforeEach(function () {
	    return helpers.run(path.join(__dirname, '../generators/feature'))
	    .withPrompts({ 
	    	feature: 'test',
	    	dir: 'test/e2e/features/pay/'
	    })
	    .toPromise();
	  });

    it('should write test/e2e/features/pay/test.feature', function () {
      assert.file('test/e2e/features/pay/test.feature');
    });
  });
});
