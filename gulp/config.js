'use strict';

var path = require('path');
var root = global.PROJECT_BASE || path.resolve(__dirname, '../');

module.exports = {
    css: {
        src: path.resolve(root, 'assets/styles/'),
        dest: path.resolve(root, '_site/assets/styles/')
    },
    js: {
        src: path.resolve(root, 'assets/scripts/'),
        dest: path.resolve(root, '_site/assets/js'),
        eslint_config: path.resolve(root, './.eslintrc')
    }
};
