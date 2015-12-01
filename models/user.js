'use strict';

var mongoose = require('mongoose');
// var bcrypt = require('bcryptjs');
var moment = require('moment');
var jwt = require('jwt-simple');


var Schema = mongoose.Schema;

var User;

var userSchema = Schema({
  // email: { type: String, unique: true, lowercase: true },
  // password: { type: String, select: false },
  displayName: String,
  picture: String,
  google: String,
  github: String
});


userSchema.methods.createJWT = function() {
  var payload = {
    sub: this._id,
    iat: moment().unix(), // "issued at time"
    exp: moment().add(12, 'hours').unix()
  };
  return jwt.encode(payload, process.env.JWT_SECRET);
}


// userSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function(password, done) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     done(err, isMatch);
//   });
// };


User = mongoose.model('User', userSchema);
module.exports = User;
