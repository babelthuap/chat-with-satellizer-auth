'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var User = require('../models/user');

// USERS

router.use(ensureAuthenticated);

router.get('/me', function(req, res) {
  User.findById(req.user, function(err, user) {
    if (err) return res.status(400).send({message: err.message});
    res.send(user);
  });
});

router.get('/', function(req, res) {
  User.find({_id: {$ne: req.user}}, function(err, user) {
    if (err) return res.status(400).send({message: err.message});
    res.send(user);
  });
});

module.exports = router;
