// Import
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var cors = require('cors');
var corsOption = {
    origin: '//*:3000/api/*',
    optionsSuccessStatus: 200
}

// Initial
var app = express();

// Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.static(path.join(__dirname, 'dist')));

// Export module
module.exports = app;