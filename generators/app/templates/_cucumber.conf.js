exports.config = {
  // protractor configuration
  specs: [
    'test/e2e/features/**/*.feature'
  ],
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  chromeOnly: false,
  allScriptsTimeout: 90000,
  getPageTimeout: 90000,
  baseUrl: '',
  plugins: [{
    path: 'test/e2e/plugins/core.js'
  }],

  // cucumber configuration
  cucumberOpts: {
    require: ['test/e2e/features/**/step_definitions/*.js', 'test/e2e/features/**/support/*.js'],
    strict: true
  }
};