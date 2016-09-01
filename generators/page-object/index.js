var generators = require('yeoman-generator');
var _ = require('lodash');
module.exports = generators.Base.extend({
 
  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }]).then(function (answers) {
    	this.props = answers;
      this.log('app name', answers.name);
    }.bind(this));
  },

  writing: {
  	config: function () {
      var camelCaseName = _.camelCase(this.props.name);
      var kebabCaseName = _.kebabCase(this.props.name);
    	this.fs.copyTpl(
              this.templatePath('_template-page.js'),
              this.destinationPath('test/page_objects/'+ kebabCaseName +'-page.js'), {
              	camelCaseName: camelCaseName
              }
          );
  	}
  }
});