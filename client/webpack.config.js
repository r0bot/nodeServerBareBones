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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true, // default is false
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },

  devtool: 'source-map'
};

// config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// config.devtool = 'source-map';

module.exports = config;
