// Import
var config = require('./config/config');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var corsOption = {
    origin: '//*:3000/api/*',
    optionsSuccessStatus: 200
}
var User = require('./models/user');
var mongoose = require('mongoose');
var loginRouter = require('./routers/login');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Initial
var app = express();
mongoose.Promise = require('bluebird');;
mongoose.connect(config.databaseUrl, { promiseLibrary: require('bluebird') })
    .then(() => {
        console.log(`Connected to database ${config.databaseUrl}`);
    })
    .catch(err => {
        console.error(err);
    });

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Setup
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('express-session')({
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

// Router
app.use(loginRouter);

// Export module
module.exports = app;