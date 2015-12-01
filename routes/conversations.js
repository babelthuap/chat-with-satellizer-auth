'use strict';

var express = require('express');
var router = express.Router();

var ensureAuthenticated = require('../config/ensureAuthenticated');
var Conversation = require('../models/conversation');
var Message = require('../models/message');


router.use(ensureAuthenticated);


router.get('/', function(req, res) {
  Conversation.find({})
    .populate('messages')
    .populate('participants')
    .exec((err, conversations) => {
      if (err) return res.status(400).send('Error');
      res.send(conversations);
    });
});

router.get('/:id', function(req, res) {
  Conversation.findById(req.params.id)
  .populate('messages')
  .populate('participants')
  .exec((err, conversation) => {
    if (err) return res.status(400).send('Error');
    res.send(conversation);
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
    if (err) return res.status(400).send('Error');
    newConversation.messages = [msg._id]
    newConversation.save((err, conv) => {
      if (err) return res.status(400).send('Error');
      res.send(conv);
    });
  });

});

module.exports = router;
