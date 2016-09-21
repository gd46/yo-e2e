// 'use strict';

// var chai = require('chai'),
//     helpers = require('yeoman-test'),
//     path = require('path'),
//     assert = require('yeoman-assert');
// // before(function () {
// //   return helpers.run(path.join( __dirname, '../app'))
// //     .withOptions({ foo: 'bar' })    // Mock options passed in
// //     .withArguments(['name-x'])      // Mock the arguments
// //     .withPrompts({ coffee: false }) // Mock the prompt answers
// //     .toPromise();                   // Get a Promise back for when the generator finishes
// // })

// describe('Generate page-object', function () {
// 	before(function () {
// 		return helpers.run(path.join( __dirname, '../generators/page-object'))
// 			withPrompts({
// 				name: 'direct-deposit',
// 				team: 'pay'
// 			})
// 			.toPromise();
// 	});

// 	describe('with prompt answered', function () {
// 		 it('should write test/e2e/page_objects/pay/direct-deposit-page.js', function () {
//       assert.file('test/e2e/page_objects/pay/direct-deposit-page.js');
//     });
// 	});
// });