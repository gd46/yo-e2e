var chai = require('../node_modules/chai');
var chaiAsPromised = require('../node_modules/chai-as-promised');
chai.use(chaiAsPromised);
global.expect = chai.expect;