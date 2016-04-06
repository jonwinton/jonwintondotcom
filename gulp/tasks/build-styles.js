'use strict';

var gulp = require('gulp');
var config = require('../config');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var map = require('postcss-map');
var pxtorem = require('postcss-pxtorem');
var cssnano = require('cssnano');
var del = require('del');


var configVariables = require('./postcss/index.map');
var pxToRemConfig = require('./postcss/pxtorem');



// Maps options
var opts = {
    basePath: config.css.src + '/**/*.css',
    maps: configVariables
};

console.log(opts);
function buildStyles() {


    var processors = [
        precss,
        map(opts),
        autoprefixer({ browsers: ['last 1 version'] }),
        pxtorem(pxToRemConfig)
    ];

    return gulp.src(config.css.src + '/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(config.css.dest));
}


/**
 * Gulp task responsible for compiling sass to distribution
 * @module compile-sass
 */
module.exports = gulp.task('build-styles', buildStyles);