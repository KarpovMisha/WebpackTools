var config = require('../webpack/dev.config.js');
var express = require('express');
var path = require('path');
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var app = express();
var port = 8080;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));


app.get("/", function(req, res) {
  res.sendFile(path.resolve('static/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.log("Express server listening on port", port);
  }
});
