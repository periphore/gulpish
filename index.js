'use strict';

var tasks = require('gulp-simple-task-loader'),
  pluginLoader = require('gulp-load-plugins'),
  plugins;

var defaults = {};

module.exports = function(gulp, args) {

  tasks(setTasks(args || {}), gulp);
  help(gulp);

};

function setTasks(args) {

  return {
    taskDirectory: args.directory || './tasks',
    filenameDelimiter: args.filenameDelimiter || '-',
    tasknameDelimiter: args.tasknameDelimiter || ':',
    plugins: setPlugins(args)
  };

}

function setPlugins(args) {

  var options = {
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
    .forEach(function mapPlugins(plugin) {
      plugins[plugin] = args.plugins[plugin];
    });

  return plugins;

}

function help(gulp) {
  gulp.task(
    'default',
    plugins
    .taskListing
    .withFilters(null, 'default'));
}
