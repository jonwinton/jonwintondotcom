'use strict';

require('es6-promise').polyfill(); // Travis-CI build fix for this issue: https://github.com/postcss/postcss-nested/issues/30

var gulp = require('gulp');
var config = require('../config');
var path = require('path');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var map = require('postcss-map');
var pxtorem = require('postcss-pxtorem');
var cssnano = require('cssnano');
var del = require('del');
var imports = require('postcss-partial-import');
var colorAlpha = require('postcss-color-alpha');
var mixins = require('postcss-mixins')({
    mixinsDir: path.join(__dirname, 'postcss/mixins')
});
var nested = require('postcss-nested');

var configVariables = require('./postcss/vars/index.map');
var pxToRemConfig = require('./postcss/pxtorem');



// Maps options
var opts = {
    basePath: config.css.src + '/**/*.css',
    maps: configVariables
};

function buildStyles() {
    var processors = [
        imports,
        mixins,
        nested,
        map(opts),
        colorAlpha,
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
