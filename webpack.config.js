/* global __dirname, module, require */
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass'],
            }
        ]
    },
    devtool: '#inline-source-map',
};
