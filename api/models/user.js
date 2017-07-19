const passportLocalMongoose = require('passport-local-mongoose');
const mongoose = require('../db/db');


const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  role: {
    type: String,
    enum: ['Client', 'Admin'],
    default: 'Client'
  },
  isArchived: Boolean,
  aqp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aqp'
  },
});
// Add email, password hash, salt, etc fields to our user schema
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true, // Emails are case-insensitive
  session: false // Disable sessions as we’ll use JWTs
});

const User = mongoose.model('User', userSchema);

module.exports = User;
