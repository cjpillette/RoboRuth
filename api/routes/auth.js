const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// Sign in: POST /auth
router.post('/auth', authMiddleware.authenticateSignIn, authMiddleware.signTokenHandler)

// Registration: POST /auth/register
router.post('/auth/register', authMiddleware.register, authMiddleware.signTokenHandler)

module.exports = router