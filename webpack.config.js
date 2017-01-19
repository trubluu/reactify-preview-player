const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
const config = {
  entry: [
    './src/index.js', 
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/,
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles/style.css"),
    new CopyWebpackPlugin([{from: 'index.html'}, {from: 'src/images/*.png'}])
  ]
};

module.exports = config;