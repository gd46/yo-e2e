'use strict';
var e2eConfig = require('../config/e2e_framework_config');
var argv = require('yargs').argv;
var _ = require('lodash');
module.exports = {
	getSeleniumAddress: funcion () {
		if(argv.grid === true) {
			return e2eConfig.defaultGrid;
		} else if(_.isUndefined(e2eConfig[argv.grid + 'Grid'])) {
			return argv.grid;
		} else {
			return e2eConfig[argv.grid + 'Grid'];
		}
	},
	setCapabilities: function () {
		var capabilities = {
			'browserName': 'chrome',
			'version': (argv.browserVersion || e2eConfig.defaultBrowserVersion).toString(),
			'platform': e2eConfig.defaultPlatform,
			'chromeOptions': {
				excludeSwitches: ['test-type'],
				pref: {'profile.managed_default_content_settings.geolocation': 1}
			},
			'loggingPrefs': {'driver': 'INFO', 'server': 'OFF', 'browser': 'SEVERE'}
		}
		if(argv.mobileEmulation) {
			_.set(capabilities, 'chromeOptions.mobileEmulation.deviceName', argv.device || e2eConfig.defaultDevice);
		}
		return capabilities;
	}
};