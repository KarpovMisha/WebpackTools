var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('webpack/dev.config.js');
var path = require('path');

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: 'www',
    hot: true,
    filename: 'bundle.js',
    publicPath: '/static/build/',
    stats: {
        colors: true
    }
});
server.listen(8080, 'localhost', function() {});