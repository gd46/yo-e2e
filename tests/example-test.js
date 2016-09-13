'use strict';

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    spies = require('chai-spies'),
    nikita;

chai.use(spies);

describe('Spies', function() {
  beforeEach(function(){
    nikita = chai.spy('Nikita')
  });

  it('should be named Nikita', function() {
    nikita.toString().should.equal("{ Spy 'Nikita' }");
  });

  describe('oops', function(){
    it('is not defined', function(){
      nikita.should.not.be.defined;
    });
    it('expect nikita is not defined', function(){
      expect(nikita).to.not.beDefined;
    });
  });
});