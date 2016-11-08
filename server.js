var WebpackDevServer = require('webpack-dev-server');
var express = require('express');
var path = require('path');
//var config = require('webpack/dev.config.js');
var webpack = require('webpack');
var webpackDevMiddleware =require('webpack-dev-middleware');
var webpackHotMiddleware =require('webpack-hot-middleware');

var app = express();
var port = 8080;

// var compiler = webpack(config);

// app.use(webpackDevMiddleware(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath,
//   stats: {colors: true}
// }));

// app.use(webpackHotMiddleware(compiler));

// app.use(express.static(__dirname + '/'));

// app.get("/", function(req, res) {
//   res.sendFile(path.resolve('index.html'));
// });

// app.listen(port, function (err) {
//   if (err) {
//     console.log('errorrrrr');
//   } else {
//     console.info('==> 🚧  Webpack development server listening on port %s', port);
//   }
// });
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});


var server = app.listen(8080, function () {

});
