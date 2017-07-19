const mongoose = require('mongoose')
mongoose.Promise = Promise

const MONGODB_DB_NAME = process.env.ATLAS_NAME
const MONGODB_ADMIN_PASSWORD = process.env.ATLAS_PASSWORD
const MONGODB_ADMIN_ACCOUNT = process.env.ATLAS_ACCOUNT

const URL = `mongodb://${MONGODB_ADMIN_ACCOUNT}:${MONGODB_ADMIN_PASSWORD}@ruthbooking-shard-00-00-gcmnb.mongodb.net:27017,ruthbooking-shard-00-01-gcmnb.mongodb.net:27017,ruthbooking-shard-00-02-gcmnb.mongodb.net:27017/${MONGODB_DB_NAME}?ssl=true&replicaSet=${MONGODB_DB_NAME}-shard-0&authSource=admin`

mongoose.connect(URL)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.info('you have connected to the database')
});

module.exports = mongoose
