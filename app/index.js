'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var fileUtils = require('./util/fileUtils');
var prompts = require('./util/prompts');

module.exports = yeoman.generators.Base.extend({
  /**
   * Answers to the prompts
   * @type {object}
   */
  answers: null,

  prompting: function () {
    var done = this.async();
    this.log(yosay('Welcome user!'));

    this.prompt(prompts, function(answers) {
      this.answers = answers;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var files = [
        'src/main/res/values/strings.xml',
        'src/main/res/layout/main.xml',
        'src/main/java/com/example/app/activities/MainActivity.java',
        ['editorconfig', '.editorconfig']
      ];
      fileUtils.copyFiles(this, files);

      var templateFiles = [
        'build.gradle',
        'src/main/AndroidManifest.xml'
      ];
      fileUtils.copyTemplates(this, templateFiles, this.answers);
    }
  }
});
