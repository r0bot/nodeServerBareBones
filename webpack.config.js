/*jslint node: true todo: true nomen: true*/
/*globals */
'use strict';

var webpack = require('webpack');

var config = {
    context: __dirname + '/portal',
    entry: './index.js',
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],

    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/}
        ]
    }
};

//config.plugins.push(new webpack.optimize.UglifyJsPlugin());
config.devtool = 'source-map';

module.exports = config;


