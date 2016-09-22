var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');


module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './src/javascripts/client'
    ],
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        publicPath: '/static/build/',
        filename: "bundle.js"
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
        new webpack.NoErrorsPlugin()
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