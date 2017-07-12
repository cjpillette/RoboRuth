const mongoose = require('../db/db')


const peopleRoleSchema = [{
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    role: String,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
}]


const bookingSchema = mongoose.Schema({
    inspectionType: String,
    clientId: peopleRoleSchema,
    entryNumber: String,
    noteToOfficer: String,
    dayTimeSelected: Date,
    attachment: String
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
