'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


function buildStyles(cb) {
    return runSequence(
        ['clean-styles'],
        ['build-styles'],
        cb
    );
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('styles', buildStyles);