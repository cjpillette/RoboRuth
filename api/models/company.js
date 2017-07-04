const mongoose = require('../db/db')


const companySchema = mongoose.Schema({
    name: String,
    aqpNumber: String,
    location: String
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company
