var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flash = require('connect-flash');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let adminRouter = require('./routes/admin');
let jsonRouter = require('./routes/json');
let db_gisuRouter = require('./routes/db_gisu');
let db_programRouter = require('./routes/db_program');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let logoutRouter = require('./routes/logout');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../front/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/json',jsonRouter);
app.use('/api/admin',adminRouter);
app.use('/api/admin/db/gisu',db_gisuRouter);
app.use('/api/admin/db/program', db_programRouter);

app.use('/api/logout', logoutRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);

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
