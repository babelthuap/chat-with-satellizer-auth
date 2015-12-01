'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var conversationSchema = Schema({
  participants: [{type: Schema.Types.ObjectId, ref: 'User'}],
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

module.exports = mongoose.model('Conversation', conversationSchema);;
