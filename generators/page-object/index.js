var generators = require('yeoman-generator');
var _ = require('lodash');
module.exports = generators.Base.extend({

  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your page-object name',
      default : this.appname // Default to current folder name
    }, {
      type  : 'input',
      name  : 'team',
      message : 'The team folder to create it in',
      validate: function (input) {
        if(_.isUndefined(input) || _.isNull(input) || input.trim() === '') {
          return 'Please define a team folder for the page object';
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
      var camelCaseName = _.camelCase(this.props.name);
      var kebabCaseName = _.kebabCase(this.props.name);

    	this.fs.copyTpl(
              this.templatePath('_template-page.js'),
              this.destinationPath('test/page_objects/' + this.props.team + '/' + kebabCaseName +'-page.js'), {
              	camelCaseName: camelCaseName
              }
          );
  	}
  }
});