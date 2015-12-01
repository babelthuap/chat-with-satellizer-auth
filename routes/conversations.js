'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var Conversation = require('../models/conversation');
var Message = require('../models/message');


router.use(ensureAuthenticated);


router.get('/', function(req, res) {
  Conversation.find({})
    // .populate('messages', 'participants')
    .exec((err, conversations) => {
      if (err) res.status(400).send('Error');
      res.send(conversations);
    });
});

router.post('/', function(req, res) {
  var newConversation = new Conversation();
  newConversation.participants = req.body.participants;

  var firstMessage = new Message({
    author: req.user,
    text: req.body.message
  });

  firstMessage.save((err, msg) => {
    if (err) {
      res.status(400).send();
    }
    else {
      newConversation.messages = [msg._id]
      newConversation.save((err, conv) => {
        if (err) {
          res.status(400).send(doc);
        }
        else {
          res.send(conv);
        }
      });
    }
  });

});

module.exports = router;
