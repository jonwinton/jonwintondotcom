'use strict';

var gulp = require('gulp');
var config = require('../config');
var del = require('del');

function cleanStyles() {
    return del([config.css.dest]);
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('clean-styles', cleanStyles);