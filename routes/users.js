'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

router.get('/me', ensureAuthenticated, function(req, res) {
  User.findById(req.user, function(err, user) {
    if (err) return res.status(400).send(err);
    res.send({displayName: user.displayName, picture: user.picture});
  });
});

module.exports = router;
