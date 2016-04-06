'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


function defaultTask(cb) {
    return runSequence(
        ['jekyll'],
        ['styles'],
        ['watch'],
        cb
    );
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('default', defaultTask);