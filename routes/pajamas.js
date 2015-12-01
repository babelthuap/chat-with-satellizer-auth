'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');

// PAJAMAS

var pajamas = ['footie', 'batman', 'bunny'];

router.use(ensureAuthenticated);

router.get('/', function(req, res) {
  console.log('req.user:', req.user); // this is a Mongo id!
  res.send(pajamas);
});

module.exports = router;
