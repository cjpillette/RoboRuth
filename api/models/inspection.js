const mongoose = require('./init')

const inspectionSchema = mongoose.Schema({
    inspectionType: String
})

const Inspection = mongoose.model('Inspection', inspectionSchema)

module.exports = Inspection
