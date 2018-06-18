var express = require('express');
var loginRouter = express.Router();
var passport = require('passport');
var User = require('../models/user');

// Login
loginRouter.post('/api/login', (req, res, next) => {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return res.status(400).json(err);
        }
        if (!user) {
            return res.status(401).json(info);
        }
        return res.status(200).json({
            username: user.username,
            role: user.role
        });
    })(req, res, next);
});

// Register
loginRouter.post('/api/register', (req, res) => {
    User.register(new User({ username: req.body.username, role: req.body.role }), req.body.password).then((result) => {
        return res.status(201).json(result);
    }).
    catch((err) => {
        return res.status(500).json(err);
    });
});

loginRouter.get('/api/logout', (req, res) => {
        return res.status(200);
});

module.exports = loginRouter;
