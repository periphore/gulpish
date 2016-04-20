'use strict';

const loader = {
  task: require('gulp-simple-task-loader'),
  plugin: require('gulp-load-plugins')
};

let options = {};

module.exports = function gulpish(gulp) {};

function load() {
  let o;
  try {
    o = require('./gulpish.json');
  } catch (e) {
    o = defaults();
  }
  options = o;
}

function defaults() {
  return {
    task: {
      "taskDirectory": "./tasks",
      "filenameDelimiter": "-",
      "tasknameDelimiter": ":"
    },
    plugin: {
      debug: false,
      pattern: [
        'gulp-*',
        'gulp.*'
      ],
      scope: [
        'dependencies',
        'devDependencies',
        'peerDependencies'
      ],
      camelize: true,
      lazy: true
    }
  };
}

function task() {
  return options.task;
}

function plugin() {
  return options.plugin;
}
