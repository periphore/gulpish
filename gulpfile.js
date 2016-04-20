'use strict';

var gulp = require('gulp'),
  gulpish = require('./index'),
  mocha = require('gulp-mocha');

gulp.task('test', function test() {
  gulp.src('test/**/*.spec.js')
    .pipe(mocha({}));
});
