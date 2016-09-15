'use strict';

var chai = require('chai'),
    helpers = require('yeoman-test'),
    path = require('path'),
    assert = require('yeoman-assert');

describe('Writing Package.json', function () {
  describe('No package.json exists: ', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app')).toPromise();
    });

    it('writes package.json', function () {
      assert.file('package.json');
    });
    it('foo: bar in package', function () {
      assert.jsonFileContent('package.json', {'foo':'bar'});
    });
  });

  describe('package.json already exists:  ', function () {
    var existingPackage;
    before(function () {
      existingPackage = '"foo": "bar"';
      helpers.run(path.join(__dirname, '../generator/app'))
          .on('ready', function (generator) {
            generator.fs.write('package.json', exisingPackage);
          });
    });

  });
});
