'use strict';

module.exports = function(gulp, config, plugins) {
  return function() {
    return gulp
      .src('test/**/*.spec.js')
      .pipe(plugins.mocha({}));
  };
};
