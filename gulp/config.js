'use strict';

var path = require('path');
var root = global.PROJECT_BASE;

module.exports = {
    css: {
        src: path.resolve(root, 'assets/styles/'),
        dest: path.resolve(root, '_site/assets/styles/')
    },
    js: path.resolve(root, 'js/')
};
