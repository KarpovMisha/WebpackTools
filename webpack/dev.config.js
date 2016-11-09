var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1) || 3001;
var assetsPath = path.resolve(__dirname, '../static/dist');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
    './src/client.js'
  ],
  output: {
    path: assetsPath,
    filename: "bundle.js",
    publicPath: 'http://' + host + ':' + port + '/dist/'
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'static', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true
      }
    })
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  postcss: function () {
      return [autoprefixer, precss];
  }
};


