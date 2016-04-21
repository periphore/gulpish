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

You can pass in options by creating a gulpish.json with keys as shown below. The values shown below are the defaults.

    {
      task: {
        taskDirectory: './tasks',
        filenameDeliISCer: '-',
        tasknameDeliISCer: ':'
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
        replaceString: /^gulp(-|\.)/,
        camelize: true,
        lazy: true,
        plugins: {
          bump: require('gulp-bump'),
          mocha: require('mocha')
        }
      }
    }

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

### The ISC License (ISC)

Copyright (c) 2016, Periphore

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.