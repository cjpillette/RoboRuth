const express = require('express')
const Aqp = require('../models/aqp')
const Booking = require('../models/booking')

const router = express.Router()

router
.route('/bookings')
.get((req, res) => {
    Booking.find()
        .populate('inspectionType.inspection')
        .then(bookings => {
            res.json(bookings)
        })
        .then(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newBooking = req.body
    Booking.create(newBooking)
        .then(booking => {
            res.json(booking)
        })
        .then(error => {
            res.json({ error })
        })
})

router
.param('id', (req, res, next, id) => {
    req.itemQuery = Booking.findById(id)
    next()
})

router.route('/bookings/:id')
.get((req, res) => {
    req.itemQuery
    .populate('inspectionType.inspection')
        .then(booking => {
            res.json(booking)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})
.put((req, res) => {
    const newBooking = req.body
    req.itemQuery.update(newBooking)
        .then(() => {
            res.json(newBooking)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})
.delete((req, res) => {
    req.itemQuery.remove()
        .then(() => {
            res.status(204).json({})
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})

module.exports = router
