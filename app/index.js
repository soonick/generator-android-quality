'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    this.log(yosay('Welcome user!'));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('build.gradle'),
        this.destinationPath('build.gradle')
      );
      this.fs.copy(
        this.templatePath('src/main/AndroidManifest.xml'),
        this.destinationPath('src/main/AndroidManifest.xml')
      );
      this.fs.copy(
        this.templatePath('src/main/res/values/strings.xml'),
        this.destinationPath('src/main/res/values/strings.xml')
      );
      this.fs.copy(
        this.templatePath('src/main/res/layout/main.xml'),
        this.destinationPath('src/main/res/layout/main.xml')
      );
      this.fs.copy(
        this.templatePath('src/main/java/com/example/app/Main.java'),
        this.destinationPath('src/main/java/com/example/app/Main.java')
      );

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
    }
  }
});
