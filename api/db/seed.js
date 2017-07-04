const Booking = require('../models/booking')

Booking.create([
  {
    _id: 'hdowlrtkvdcmgors',
    clientId: 'peter pan',
    inspectionType: 'RTG',
    entryNumber: 'ACLKJMN9',
    noteToOfficer: 'Beware of the dog',
    attachment: 'very attached'
  },
  {
    _id: 'oikojyhmngtod',
    clientId: 'Maggie the chicken',
    inspectionType: 'Inspect/Unpack',
    entryNumber: 'ACL98UIT',
    noteToOfficer: 'If gate locked, buzz',
    attachment: 'some files attached'
  },
  {
    _id: 'ertqshdetfrsebdq',
    clientId: 'Monsoon',
    inspectionType: 'Inspect/Unpack',
    entryNumber: 'ACLJKFG6',
    noteToOfficer: '',
    attachment: 'Two files attached'
  }
])
.then(data => {
  console.info('saved!', data)
})
.catch(err => {
  console.error('db error', err)
})
