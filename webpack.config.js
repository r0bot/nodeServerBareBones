const path = require('path');

const config = {
  context: path.resolve('./client'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'stage-2'] // 'env',
          }
        }
      }
    ]
  },

  devtool: 'source-map'
};

// config.plugins.push(new webpack.optimize.UglifyJsPlugin());
// config.devtool = 'source-map';

module.exports = config;
