'use strict';

const chai = require('chai'),
  expect = require('chai').expect,
  rewire = require('rewire'),
  gulpish = rewire('../');

describe('Gulpish', function() {

  let defaults,
    app = {
      task: gulpish.__get__('task'),
      plugin: gulpish.__get__('plugin'),
      defaults: gulpish.__get__('defaults')
    };

  before(function() {

  });

  describe('Set up with no options file', function() {

    before(function() {
      let options;
      defaults = require('./misc/defaults');
      options = app.defaults();
      delete options.plugin.config;
      gulpish.__set__('options', options);
    });

    it('should return default task options', function() {
      expect(app.task()).to.be.eql(defaults.task);
    });

    it('should return default plugin options', function() {
      defaults.plugin.replaceString = /^gulp(-|\.)/;
      expect(app.plugin()).to.be.eql({
        simpleTaskLoader: require('gulp-simple-task-loader'),
        taskListing: require('gulp-task-listing'),
        mocha: require('gulp-mocha'),
      });
    });

  });

  describe('Set up with options file', function() {

    before(function() {
      gulpish.__set__('options', require('./misc/gulpish'));
    });

    it('should return default task options', function() {
      expect(app.task()).to.be.eql({
        taskDirectory: './gulpish/tasks',
        filenameDelimiter: '_',
        tasknameDelimiter: '+'
      });
    });

    it('should return default plugin options', function() {
      expect(app.plugin()).to.be.eql({
        simpleTaskLoader: require('gulp-simple-task-loader'),
        taskListing: require('gulp-task-listing'),
        mocha: require('gulp-mocha'),
      });
    });

  });

});
