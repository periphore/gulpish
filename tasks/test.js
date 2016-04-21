'use strict';

const mocha = require('gulp-mocha')

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp
      .src('test/**/*.spec.js')
      .pipe(mocha({}));
  };
};
