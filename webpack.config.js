const path = require('path');

const config = {
  context: path.resolve(__dirname, 'client'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ],
  },
};

// config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// config.devtool = 'source-map';

module.exports = config;

