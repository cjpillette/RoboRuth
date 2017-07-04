const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection

module.exports = mongoose