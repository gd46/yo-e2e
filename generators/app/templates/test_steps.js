var testSteps = function () {

	this.When(/^I go to github$/, function () {
		browser.ignoreSynchronization = true;
		return browser.get("https://github.com/");
	});

	this.Then(/^I should see the header logo$/, function () {
		browser.ignoreSynchronization = true;
		return expect($('.header-logo-invertocat').isDisplayed()).to.become(true);
	});
};

module.exports = testSteps;