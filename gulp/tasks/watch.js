'use strict';

var gulp = require('gulp');
var config = require('../config');

function watch() {
    gulp.watch(config.css.src + '/**/*.css', ['styles']);
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*', '**/*.html', '_less/**/*.less', 'js/**/*', 'images/*'], ['jekyll-rebuild']);
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('watch', watch);