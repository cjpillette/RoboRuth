const mongoose = require('../db/db')

const aqpSchema = mongoose.Schema({
    businessName: String,
    aqpNumber: String
})

const Aqp = mongoose.model('Aqp', aqpSchema, 'aqp')

module.exports = Aqp
