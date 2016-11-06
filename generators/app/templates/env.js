'use strict';
	var configure = function () {
		console.log('testing module');
	  this.setDefaultTimeout(3 * 60 * 1000);
	};
	module.exports = configure;