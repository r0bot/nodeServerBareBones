const path = require('path');

const config = {
  context: __dirname,
  entry: {
    '../public/dist/bundle': './index.js'
  },
  output: {
    path: path.resolve(__dirname, '../', 'public'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react'] // 'stage-2'. 'env'
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              minimize: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },

  devtool: 'source-map'
};

// config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// config.devtool = 'source-map';

module.exports = config;
