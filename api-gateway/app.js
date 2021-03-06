/*
============================================
; Title:  app.js
; Author: Dan Ross
; Date:   18 October 2020
; Description: API Gateway
;===========================================
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');


var app = express();

const conn = 'mongodb+srv://admin:admin@buwebdev-cluster-1.cnaxx.mongodb.net/api-gateway?retryWrites=true&w=majority'
//Database connection
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  userNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.debug('Connection to the database instance was successful');
}).catch(err => {
  console.log('MongoDB Error: ${err.message}')
}); //end mongoose connection

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
