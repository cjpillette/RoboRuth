const passportLocalMongoose = require('passport-local-mongoose')
const mongoose = require('./init')

const userSchema = mongoose.Schema({})
// Add email, password hash, salt, etc fields to our user schema
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameLowerCase: true, // Emails are case-insensitive
  session: false // Disable sessions as we’ll use JWTs
})

const User = mongoose.model('User', userSchema)

module.exports = User