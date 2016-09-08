var generators = require('yeoman-generator');
var _ = require('lodash');
var indentString = require('indent-string');
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


      this.fs.copy('test/includes/page_objects.js', 'test/includes/page_objects.js', {
        process: function (content) {
          var requireStatement = camelCaseName + ": require('../page_objects/" + camelCaseName +"')." + camelCaseName + ',';
          var data = content.toString().split("\n");
          var found = false;
          var lineNumber = 0;

          console.log('data', data);
          while(!found) {
          if(data[lineNumber] === '') {
            console.log('line', data[lineNumber])
            var previousLine = lineNumber -1;
            data.splice(lineNumber, 0, indentString(requireStatement, 2));
            found = true;
          }
          lineNumber++;
        }
        var text = data.join("\n");
        return text;
        }
      });

    	this.fs.copyTpl(
              this.templatePath('_template-page.js'),
              this.destinationPath('test/page_objects/' + this.props.team + '/' + kebabCaseName +'-page.js'), {
              	camelCaseName: camelCaseName
              }
          );
  	}
  }
});