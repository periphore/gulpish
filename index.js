'use strict';

const loader = {
  task: require('gulp-simple-task-loader'),
  plugin: require('gulp-load-plugins')
}, taskListing = require('gulp-task-listing');

let options = {};

module.exports = function gulpish(gulp) {

  load();

  let plugins = plugin(),
    tasks = [
      'default',
      'help',
    ];

  options.task.plugins = plugins;

  tasks.forEach(function(task) {
    gulp.task(
      task,
      taskListing
      .withFilters(null, tasks.join('|')));
  });

  loader.task(task(), gulp);

};

function load() {
  let o;
  try {
    o = require('../../gulpish.json');
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
      config: require('../../package'),
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
  options.plugin.replaceString = /^gulp(-|\.)/;
  return loader.plugin(options.plugin);
}
