const express = require('express')
const User = require('../models/user')

const router = express.Router()

router
.route('/users')
.get((req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .then(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newUser = req.body
    User.create(newUser)
        .then(user => {
            res.json(user)
        })
        .then(error => {
            res.json({ error })
        })
})

router
.param('id', (req, res, next, id) => {
    req.itemQuery = User.findById(id)
    next()
})

router.route('/users/:id')
.get((req, res) => {
    req.itemQuery
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})
.patch((req, res) => {
    const { isArchived } = req.body
    req.itemQuery.update({
      isArchived
    })
        .then(data => {
            res.json(data)
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
