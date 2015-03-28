var assert = require('assert');
var fileUtils = require('../../../../app/util/fileUtils');
var sinon = require('sinon');

describe('copyFiles', function() {
  beforeEach(function() {
    this.generator = {
      fs: {
        copy: sinon.spy()
      },
      templatePath: function(path) {
        return 'temp/' + path;
      },
      destinationPath: function(path) {
        return 'dest/' + path;
      }
    };
  });

  it('calls fs.copy with correct paths', function() {
    var files = [
      'file',
      ['original', 'new']
    ];
    fileUtils.copyFiles(this.generator, files);

    assert.deepEqual(
      this.generator.fs.copy.args[0],
      ['temp/file', 'dest/file']
    );
    assert.deepEqual(
      this.generator.fs.copy.args[1],
      ['temp/original', 'dest/new']
    );
  });
});

describe('copyTemplates', function() {
  beforeEach(function() {
    this.generator = {
      fs: {
        copyTpl: sinon.spy()
      },
      templatePath: function(path) {
        return 'temp/' + path;
      },
      destinationPath: function(path) {
        return 'dest/' + path;
      }
    };
  });

  it('calls fs.copyTpl with correct paths', function() {
    var files = [
      'file',
      ['original', 'new']
    ];
    var context = {
      key: 'val'
    };
    fileUtils.copyTemplates(this.generator, files, context);

    assert.deepEqual(
      this.generator.fs.copyTpl.args[0],
      ['temp/file', 'dest/file', context]
    );
    assert.deepEqual(
      this.generator.fs.copyTpl.args[1],
      ['temp/original', 'dest/new', context]
    );
  });
});
