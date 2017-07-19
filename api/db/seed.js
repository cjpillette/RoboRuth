const Path = require('path')
const envPath = Path.join(__dirname, '..', '.env')
require('dotenv').config({ path: envPath })

const mongoose = require('./db')

const User = require('../models/user')

User.create([
  {
    role: 'Admin',
    firstName: 'Ewen',
    lastName: 'Davey',
    email: 'ewen@test.com',
    phoneNumber: '0361653777',
    isArchived: false,
    aqp: null
  },
  {
    role: 'Client',
    firstName: 'David',
    lastName: 'Cusato',
    email: 'david@test.com',
    phoneNumber: '0391923435',
    isArchived: false,
    aqp: null
  }
])
  .then(() => {
    mongoose.disconnect();
  })
