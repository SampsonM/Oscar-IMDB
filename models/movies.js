const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
  title: String,
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: 'actors' }],
  votecount: String,
  genres: Array,
  productionCompanies: Array
});

module.exports = mongoose.model('movies', Movie);