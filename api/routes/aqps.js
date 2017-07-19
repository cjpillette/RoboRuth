const express = require('express')
const Aqp = require('../models/aqp')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

router
.route('/aqps')
.get(authMiddleware.authenticateJWT, (req, res) => {
    Aqp.find()
        .then(aqps => {
            res.json(aqps)
        })
        .then(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newAqp = req.body
    Aqp.create(newAqp)
        .then(aqp => {
            res.json(aqp)
        })
        .then(error => {
            res.json({ error })
        })
})

router
.param('id', (req, res, next, id) => {
    req.itemQuery = Aqp.findById(id)
    next()
})

router.route('/aqps/:id')
.get((req, res) => {
    req.itemQuery
        .then(aqp => {
            res.json(aqp)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})
.put((req, res) => {
    const newAqp = req.body
    req.itemQuery.update(newAqp)
        .then(() => {
            res.json(newAqp)
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
