'use strict';

const should = require('chai').should(),
  rewire = require('rewire'),
  gulpish = rewire('../');

describe('Gulpish', function() {

  var setTasks,
    setPlugins,
    options;

  beforeEach(function() {
    setTasks = gulpish.__get__('setTasks');
    setPlugins = gulpish.__get__('setPlugins');
  });

  describe('Task loader settings with no options passed', function() {

    beforeEach(function() {
      options = setTasks();
    });

    it('should set default taskDirectory', function() {
      (options.taskDirectory).should.equal('./tasks');
    });

    it('should set default filenameDelimiter', function() {
      (options.filenameDelimiter).should.equal('-');
    });

    it('should set default tasknameDelimiter', function() {
      (options.tasknameDelimiter).should.equal(':');
    });

  });

  describe('Task loader settings override', function() {

    beforeEach(function() {
      options = setTasks({
        taskDirectory: './gulp/tasks',
        filenameDelimiter: '_',
        tasknameDelimiter: '+'
      });
    });

    it('should override default taskDirectory', function() {
      (options.taskDirectory).should.equal('./gulp/tasks');
    });

    it('should override default filenameDelimiter', function() {
      (options.filenameDelimiter).should.equal('_');
    });

    it('should override default tasknameDelimiter', function() {
      (options.tasknameDelimiter).should.equal('+');
    });

  });

});
