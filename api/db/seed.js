const Path = require('path')
const envPath = Path.join(__dirname, '..', '.env')
require('dotenv').config({ path: envPath })

const User = require('../models/user')
const Aqp = require('../models/aqp')

const user = new User({
  role: 'Admin',
  firstName: 'Ewen',
  lastName: 'Davey',
  email: 'ewen@test.com',
  phoneNumber: '0361653777',
  isArchived: false,
  aqp: null
})


User.register(user, process.env.EWEN_PASSWORD, (error, user) => {
  // Error in registration
  if (error) {
    // Our middleware failed with this error
    console.log(error)
    return
  }

  console.log(user)
})

Aqp.create([
  {
    businessName: 'Cusato Garlic',
    aqpNumber: 'BT342'
  },
  {
    businessName: 'Fresh Fruits A2',
    aqpNumber: 'BT355'
  },
  {
    businessName: 'Reid Fruits',
    aqpNumber: 'BT367'
  },
  {
    businessName: 'Mongoon Imports',
    aqpNumber: 'BT543'
  },
  {
    businessName: 'Huon Aquaculture',
    aqpNumber: 'BT142'
  }
])
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
})

//   .then(() => {
//     mongoose.disconnect();
//   })
