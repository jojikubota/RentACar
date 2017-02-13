var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongo');
var mongodb = require('./routes/mongodb');

var routes = require('./routes/index');
var app = express();
var http = require('http').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', routes.index);
app.get('/search', routes.search);
app.get('/getCars', routes.getCars);
app.get('/cardetails', routes.cardetails);
// app.get('/car1-detail', routes.car1_detail);
// app.get('/car1-vr', routes.car1_vr);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	console.log(res.toString());
	console.log(req.toString());
	var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    //res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


http.listen(3001, function(){
  console.log('listening on port 3001');
});
