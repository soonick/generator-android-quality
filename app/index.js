'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var fileUtils = require('./util/fileUtils');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    this.log(yosay('Welcome user!'));
  },

  writing: {
    app: function () {
      var files = [
        'build.gradle',
        'src/main/AndroidManifest.xml',
        'src/main/res/values/strings.xml',
        'src/main/res/layout/main.xml',
        'src/main/java/com/example/app/Main.java',
        ['editorconfig', '.editorconfig']
      ];
      fileUtils.copyFiles(this, files);
    }
  }
});
