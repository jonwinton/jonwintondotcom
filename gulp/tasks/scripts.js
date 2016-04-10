'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


function buildScripts(cb) {
    return runSequence(
        ['clean-js'],
        ['build-js'],
        cb
    );
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('scripts', buildScripts);