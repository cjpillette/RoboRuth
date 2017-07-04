require('dotenv').config()

const Booking = require('../models/booking')

const mongoose = require('mongoose')
mongoose.Promise = Promise

const MONGODB_DB_NAME = process.env.ATLAS_NAME
const MONGODB_ADMIN_PASSWORD = process.env.ATLAS_PASSWORD
const MONGODB_ADMIN_ACCOUNT = process.env.ATLAS_ACCOUNT

const URL = `mongodb://${MONGODB_ADMIN_ACCOUNT}:${MONGODB_ADMIN_PASSWORD}@ruthbooking-shard-00-00-gcmnb.mongodb.net:27017,ruthbooking-shard-00-01-gcmnb.mongodb.net:27017,ruthbooking-shard-00-02-gcmnb.mongodb.net:27017/${MONGODB_DB_NAME}?ssl=true&replicaSet=${MONGODB_DB_NAME}-shard-0&authSource=admin`

mongoose.connect(URL)


const bookings = [
  new Booking({
    _id: 'hdowlrtkvdcmgors',
    clientId: 'peter pan',
    inspectionType: 'RTG',
    entryNumber: 'ACLKJMN9',
    noteToOfficer: 'Beware of the dog',
    attachment: 'very attached'
  }),
  new Booking({
    _id: 'oikojyhmngtod',
    clientId: 'Maggie the chicken',
    inspectionType: 'Inspect/Unpack',
    entryNumber: 'ACL98UIT',
    noteToOfficer: 'If gate locked, buzz',
    attachment: 'some files attached'
  }),
    new Booking({
      _id: 'ertqshdetfrsebdq',
      clientId: 'Monsoon',
      inspectionType: 'Inspect/Unpack',
      entryNumber: 'ACLJKFG6',
      noteToOfficer: '',
      attachment: 'Two files attached'
    })
]


var done = 0;
for (i = 0 ; i < bookings.length ; i++ ){
  bookings[i].save((err, res) => {
    done++;
    if(done === bookings.length) {
      exit();
    }
  });
}

exit = () => {
  mongoose.disconnect();
}
