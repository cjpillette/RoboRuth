require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')
const bookingsRouter = require('./routes/bookings')
const aqpsRouter = require('./routes/aqps')
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const imageRouter = require('./routes/imageRouter')

// Create server
const server = express()

// Middleware
server.use(bodyParser.json())
// Connect Passport to Express
server.use(authMiddleware.initialize)
// CORS
server.use(cors({
    origin: process.env.CORS_ORIGINS.split(',')
}))

// API Routes
server.use([
    bookingsRouter,
    aqpsRouter,
    authRouter,
    imageRouter

])

// Route to quickly set database up
server.get('/setup', (req, res) => {
    const forestGump = new Booking({ entryNumber: 'ACLKJUM76' })
    console.log('Save')
    forestGump.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(error => {
            res.json({ error })
        })
})

// Handle errors by returning JSON
server.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({
    error: { message: error.message }
  })
})

// Start server at localhost:7000
server.listen(7000)
