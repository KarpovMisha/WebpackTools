var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/javascripts/client',
    ],
    output: {
        path: assetsPath,
        publicPath: '/dist/',
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].js'
    },

    resolve: {
        modulesDirectories: [
            'node_modules',
            'src'
        ],
        extensions: ['', '.json', '.js']
    },

    plugins: [
        new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ],

    progress: true,

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass")}
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};