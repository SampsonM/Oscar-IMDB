const mongoose = require('mongoose');

const Company = new mongoose.Schema({
  name: String,
  hq: String,
  homepage: String,
  description: String
});

module.exports = mongoose.model('companies', Company);