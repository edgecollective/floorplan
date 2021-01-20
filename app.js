  
require('dotenv').config({ path: __dirname + '/.env' })
const { execSync } = require('child_process');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var passport = require('./config/passport');
var networkUtil = require('./utils/networkUtil');
var favicon = require('serve-favicon');
var router = express.Router();

var indexRouter = require('./routes/index');

var app = express()
var port = process.env['PORT']

app.set('view engine', 'pug');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(passport.initialize())

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Loade routes
app.use('/', indexRouter);

app.listen(port, () => {
    var ip = networkUtil.getIp();
    console.log(`Bayou-CO2 is up and running at: http://${ip}:${port}`)
})