//import node libraries
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//require modules from route directory
//files contain code for handling particular sets of routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//creates express application object 
var app = express();

// view engine setup
//set views value to specify where templates will be stored (subfolder, views)
app.set('views', path.join(__dirname, 'views'));
//set view engine value to specify temlpate library
app.set('view engine', 'pug');

//add middleware to request handling chain
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//get Express to serve all static files in /public directory in the project root
app.use(express.static(path.join(__dirname, 'public')));

//add previously imported route handling code to the request handling chain. 
//imported code will define particular routes for different parts of the site
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// add handler methods for errors and HTTP 404 responses
// next useful in the future if you want to add 
// multiple route handlers to the '/' route path
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//One thing of interest above is that the callback function has the third argument 'next', 
//and is hence a middleware function rather than a simple route callback
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//exports app from the module
//imported by /bin/www
module.exports = app;
