var express = require('express');
var loginRouter = express.Router();
var passport = require('passport');
var User = require('../models/user');

// Logout
loginRouter.post('/api/login', (req, res, next) => {
    // generate the authenticate method and pass the req/res
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.status(500).json(err);
        }
        if (!user) {
            return res.json(info);
        }
        return res.send('hahaha');
    })(req, res, next);
});

loginRouter.post('/api/register', (req, res) => {
    User.register(new User({ username: req.body.username, role: req.body.role }), req.body.password).then((result) => {
        return res.json(result);
    }).catch((err) => {
        return res.send(401);
    });
});

module.exports = loginRouter;
