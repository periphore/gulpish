# Gulpish

[![Build Status](https://travis-ci.org/Periphore/gulpish.svg?branch=master)](https://travis-ci.org/Periphore/gulpish)  [![Dependency Status](https://david-dm.org/periphore/gulpish.svg)](https://david-dm.org/periphore/gulpish)

### Introduction

Gulpish is a modular gulp.js task organization that can autoload gulp dependencies and tasks.

### Installation

    npm install --save gulpish

### Usage

Create a tasks folder

    var gulp = require('gulp'),
    gulpish = require('gulpish');

    gulpish(gulp);

This will load and register tasks for all files defined inside ``` ./tasks ``` directory

### Options

You can pass in an options object as shown below. The values shown below are the defaults.

    gulpish({
      taskDirectory: './tasks',
      filenameDelimiter: '-',
      tasknameDelimiter: ':',
      DEBUG: false,
      pattern: [
        'gulp-*',
        'gulp.*'
      ],
      scope: [
        'dependencies',
        'devDependencies',
        'peerDependencies'
      ],
      replaceString: /^gulp(-|\.)/,
      camelize: true,
      lazy: true,
      plugins: {
        bump: require('gulp-bump'),
        mocha: require('mocha')
      }
    })

### Structuring a task

All tasks should be functions that receive the parameters gulp, config, and plugins.

There are 2 ways to structure a task -- returning a function that executes the task, or returning an object that contains dependencies, parameters, and the function that executes the task.

#### Basic tasks

This is a typical function as you are used to with gulp.

    'use strict';

    module.exports = function(gulp, config, plugins) {
      return function([callback]) {};
    };

#### Tasks with dependencies and/or parameters

All 3 object keys (deps, params, and fn) are optional. This allows you to create a task that strictly calls other tasks, a task that is parameterized, or a task that just acts like a normal task.

If there are no dependencies or parameters for the task you can use the above "Basic task" format for creating a basic task.

The values shown below are the defaults.

    'use strict';

    module.exports = function(gulp, config, plugins) {
      return {
        deps: [],
        params: [],
        fn: function([callback]) {}
      };
    };

### The MIT License (MIT)

Copyright (c) 2016, Periphore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
