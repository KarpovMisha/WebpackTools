var Express = require('express');
var path = require('path');

var app = Express();
var port = 8080;

app.use(Express.static(path.join(__dirname, '..', 'static')));

app.use(function(req, res) {
  res.send(path.resolve('static/index.html'));
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.log("Express server listening on port", port);
  }
});
