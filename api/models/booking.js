const mongoose = require('./init')

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

const inspectionTypeSchema = [
  inspection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inspection'
  }
]

const bookingSchema = mongoose.Schema({
    inspectionType: inspectionTypeSchema,
    clientId: peopleRoleSchema,
    entryNumber: String,
    noteToOfficer: String,
    startTime: Date,
    attachment: String
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
