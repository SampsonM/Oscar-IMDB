const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
  title: String,
  cast: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'actors',
    // required: true
  }],
  vote_count: Number,
  genres: Array,
  productionCompanies: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies',
    // required: true
  }]
});

module.exports = mongoose.model('movies', Movie);
