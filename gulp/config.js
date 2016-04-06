'use strict';

var path = require('path');
var root = global.PROJECT_BASE;

module.exports = {
    css: {
        src: path.resolve(root, '_styles/'),
        dest: path.resolve(root, '_site/css/')
    },
    js: path.resolve(root, 'js/')
};
