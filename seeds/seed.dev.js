const mongoose = require('mongoose');
mongoose.Promise = Promise;
const { DB_URL } = require('../config');
const seedDB = require('./seed');

mongoose.connect(DB_URL)
  .then(() => console.log(`connected to database ${DB_URL}`))
  .then(() => seedDB())
  .then(() => mongoose.disconnect())
  .then(() => console.log('mongoose disconnected!'))
  .catch(console.log)