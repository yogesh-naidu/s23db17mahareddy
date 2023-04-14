var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var giraffeRouter = require('./routes/giraffe');
var boardRouter = require('./routes/board');
var selectRouter=require('./routes/selector')
var giraffe = require("./models/giraffe");
var resourceRouter = require('./routes/resource')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/giraffe', giraffeRouter);
app.use('/board',boardRouter);
app.use('/selector',selectRouter);
app.use('/resource', resourceRouter);


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

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await giraffe.deleteMany();
  let instance1 = new giraffe({giraffe_name:"car", giraffe_color:'light tan',giraffe_weight:3600});
  instance1.save().then(() => {
    console.log("First object saved");
  })
  .catch((error) => {
    console.error("Error", error);
  })
  let instance2 = new giraffe({giraffe_name:"nubian", giraffe_color:'black',giraffe_weight:4000});
  instance2.save().then(() => {
    console.log("Second object saved");
  })
  .catch((error) => {
    console.error("Error", error);
  })
  let instance3 = new giraffe({giraffe_name:"cape", giraffe_color:'yellow',giraffe_weight:4200});
  instance3.save().then(() => {
    console.log("Third object saved");
  })
  .catch((error) => {
    console.error("Error", error);
  })
  }

  let reseed = true;
if (reseed) { recreateDB();}

module.exports = app;
