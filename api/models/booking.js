const mongoose = require('../db/db')


const bookingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    aqp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aqp'
    },
    inspectionType: String,
    entryNumber: String,
    noteToOfficer: String,
    dateSelected: Date,
    attachment: [ {type: String }]
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
