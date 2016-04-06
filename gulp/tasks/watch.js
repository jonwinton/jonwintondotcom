'use strict';

var gulp = require('gulp');

function watch() {
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '**/*.html', '_less/**/*.less', 'js/**/*', 'images/*'], ['jekyll-rebuild']);
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('watch', watch);