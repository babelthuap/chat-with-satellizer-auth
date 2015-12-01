'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var conversationSchema = Schema({
  participants: [{type: Schema.Types.ObjectId, ref: 'users'}],
  messages: [{type: Schema.Types.ObjectId, ref: 'messages'}]
});

module.exports = mongoose.model('Conversation', conversationSchema);;
