'use strict';

require('es6-promise').polyfill(); // Travis-CI build fix for this issue: https://github.com/postcss/postcss-nested/issues/30

var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var webpack = require('gulp-webpack');
var webpackConfig = require('../webpack.config.js');

function buildJS() {
    return gulp.src(config.js.src)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.js.dest));
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('build-js', buildJS);
