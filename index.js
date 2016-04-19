'use strict';

const taskLoader = require('gulp-simple-task-loader'),
  pluginLoader = require('gulp-load-plugins');

let plugins;

module.exports = function(gulp, args) {

  taskLoader(setTasks(args || {}), gulp);
  setDefaultTasks(gulp);

};

function setDefaultTasks(gulp) {

  let tasks = [
    'default',
    'help',
  ];

  tasks.forEach(function(task) {
    gulp.task(
      task,
      plugins
      .taskListing
      .withFilters(null, tasks.join('|')));
  });

}

function setTasks(args) {

  return {
    taskDirectory: args.directory || './tasks',
    filenameDelimiter: args.filenameDelimiter || '-',
    tasknameDelimiter: args.tasknameDelimiter || ':',
    plugins: setPlugins(args)
  };

}

function setPlugins(args) {

  let options = {
    DEBUG: args.DEBUG || false,
    pattern: args.pattern || [
      'gulp-*',
      'gulp.*'
    ],
    scope: args.scope || [
      'dependencies',
      'devDependencies',
      'peerDependencies'
    ],
    replaceString: args.replaceString || /^gulp(-|\.)/,
    camelize: args.camelize || true,
    lazy: args.lazy || true

  };

  plugins = pluginLoader(options);

  Object
    .keys(args.plugins || {})
    .map((plugin) => {
      plugins[plugin] = args.plugins[plugin];
    });

  return plugins;

}
