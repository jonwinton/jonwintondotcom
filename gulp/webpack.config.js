var config = require('./config');


module.exports = {
    entry: config.js.src,
    output: {
        path: config.js.dest,
        filename: '[name].js',
    },
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }

        ],
        preLoaders: [
            { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
        ]
    },
    eslint: {
        configFile: config.eslint_config
    },
    resolve: {}
};
