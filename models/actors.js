const mongoose = require('mongoose');

const Actor = new mongoose.Schema({
  name: { type: String, required: true },
  also_known_as: [String], // arrray of strings
  biography: String,
  popularity: String,
  gender: String
})

module.exports = mongoose.model('actors', Actor); // use ActorSchema instead