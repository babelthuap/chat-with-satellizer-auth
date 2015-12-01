'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messageSchema = Schema({
  author: {type: Schema.Types.ObjectId, ref: 'users'},
  text: {type: String, required: true},
  time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', messageSchema);;
