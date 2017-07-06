const mongoose = require('../db/db')


const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person
