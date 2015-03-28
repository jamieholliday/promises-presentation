var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var debug = require('debug')('my-application');

var routes = require('./routes/index');

var app = express();

app.use(favicon('favicon.ico'));
app.use(logger('dev'));
app.use(express.static(__dirname));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
