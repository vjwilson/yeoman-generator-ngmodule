/**
 * main generator for Yeoman generator-ngmodule
 */

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // This makes `moduleName` a required argument.
    this.argument('moduleName', {
      type: String,
      required: true
    });
  },
  writing: function () {
    var lowerName  = this.moduleName.toLowerCase();
    var upperName  = this.moduleName.toUpperCase();
    var folderName = this.moduleName;
    var ctrlName   =  lowerName + 'Controller';

    this.fs.copyTpl(
      this.templatePath('app.js'),
      this.destinationPath(folderName + '/' + this.moduleName + '.app.js'), {
        name: lowerName
      }
    );

    this.fs.copyTpl(
      this.templatePath('controller.js'),
      this.destinationPath(folderName + '/' + this.moduleName + '.controller.js'), {
        ctrlName: ctrlName,
        name: lowerName
      }
    );

    this.fs.copyTpl(
      this.templatePath('controller.spec.js'),
      this.destinationPath(folderName + '/' + this.moduleName + '.controller.spec.js'), {
        ctrlName: ctrlName,
        name: lowerName
      }
    );

    this.fs.copyTpl(
      this.templatePath('view.html'),
      this.destinationPath(folderName + '/' + this.moduleName + '.view.html'), {
        name: upperName
      }
    );
  }
});

