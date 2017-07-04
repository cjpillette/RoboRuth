const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Config
const jwtSecret = 'SECRET!' // FIXME: use environment variable
const jwtAlgorithm = 'HS256'

// Create a valid JWT
function signTokenHandler(req, res) {
  const user = req.user
  const token = jwt.sign(
    { // Payload
      email: user.email
    },
    jwtSecret,
    { // Options
      subject: user._id.toString(),
      algorithm: jwtAlgorithm,
      expiresIn: '6h'
    }
  )
  res.json({ token })
}

// Add local strategy (email & password)
passport.use(
  User.createStrategy()
)

// Add JWT strategy (json web token)
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: jwtSecret,
      // Authorization: JWT [token]
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
      algorithms: [jwtAlgorithm]
    },
    // Called when a valid token is found
    // It decode the token payload for us
    (jwtPayload, done) => {
      const userID = jwtPayload.sub // Used ID is the subject
      // Look up the user in our database
      User.findById(userID)
        .then(user => {
          // User was found
          if (user) {
            done(null, user)
          }
          // No user was found
          else {
            done(null, false)
          }
        })
        .catch(error => {
          done(new Error(`Issue fetching user with ID: ${userID}`), false)
        })
    }
  )
)

// Register new user
function registerMiddleware(req, res, next) {
  console.log('registerMiddleware', req.body)
  const user = new User({
    email: req.body.email
  })
  User.register(user, req.body.password, (error, user) => {
    // Error in registration
    if (error) {
      // Our middleware failed with this error
      next(error)
      return
    }

    // Add our newly created user to the req
    req.user = user
    // Our middleware succeeded with no error
    next()
  })
}

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  authenticateJWT: passport.authenticate('jwt', { session: false }),
  register: registerMiddleware,
  signTokenHandler
}