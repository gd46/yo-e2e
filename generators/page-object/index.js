var generators = require('yeoman-generator');
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
    	this.fs.copyTpl(
              this.templatePath('__name__-page.js'),
              this.destinationPath('test/page_objects/'+ this.props.name +'-page.js'), {
              	name: this.props.name
              }
          );
  	}
  }
});