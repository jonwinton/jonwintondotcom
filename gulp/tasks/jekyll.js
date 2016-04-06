'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var notify       = require('gulp-notify');
var gutil        = require('gulp-util');
var cp           = require('child_process');
var path         = require('path');
var runSequence = require('run-sequence');



var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('refresh', function() {
    browserSync.reload();
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', function (cb) {


    return runSequence(
        ['jekyll-build'],
        ['styles'],
        ['refresh'],
        cb
    );
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


module.exports = gulp.task('jekyll', ['browser-sync', 'watchJekyll']);