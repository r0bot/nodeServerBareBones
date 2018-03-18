const path = require('path');

const config = {
  context: path.resolve(__dirname),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'stage-2',
            'react'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          'postcss-loader' // has separate config, see postcss.config.js nearby
        ]
      },
    ]
  },
};

// config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// config.devtool = 'source-map';

module.exports = config;
