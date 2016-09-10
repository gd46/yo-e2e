var generators = require('yeoman-generator');
var _ = require('lodash');
module.exports = generators.Base.extend({

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'feature',
      message : 'Feature file name',
      default : this.appname, // Default to current folder name
      validate: function (input) {
        if(_.isUndefined(input) || _.isNull(input) || input.trim() === '') {
          return 'Please define a name for your feature';
        } else {
           return true;
        }
      }
    }, {
      type  : 'input',
      name  : 'dir',
      message : 'The directory to create it in',
      default: 'test/e2e/features/',
      validate: function (input) {
        if(!input.match(/^test\/e2e\/features\/(([A-Za-z]*\_?[A-Za-z]*?\/)+)?$/)) {
          return 'Please be sure to put your features in test/e2e/features/ in any sub-directory, separation in words using underscore, and end in a slash';
        } else {
          return true;
        }
      }
    }]).then(function (answers) {
    	this.props = answers;
    }.bind(this));
  },

  writing: {
  	config: function () {
      var camelCaseFeatureName = _.kebabCase(this.props.feature);
      var featureFilePath = this.props.dir + camelCaseFeatureName + '.feature';
      this.fs.copyTpl(
              this.templatePath('_feature.feature'),
              this.destinationPath(featureFilePath), {
              	camelCaseFeatureName: camelCaseFeatureName
              }
          );
  	}
  }
});