'use strict';

var gulp = require('gulp');
var config = require('../config');
var del = require('del');

function cleanJS() {
    return del([config.js.dest]);
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('clean-js', cleanJS);