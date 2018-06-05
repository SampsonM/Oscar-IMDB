let path = process.env.NODE_ENV;
path = (path === 'production' || !path) ? 'development' : path;

const mongoose = require('mongoose');
mongoose.Promise = Promise;
const { Actor, Movie, Company } = require('../models');
const { companyData, actorData, movieData } = require(`./${path}-data`);

function seedMoviedb (companyDocs, actorDocs) {
  const actorIds = generateIDS(actorData, actorDocs);
  const companyIds = generateIDS(companyData, companyDocs);

  newMovieData = movieData.map(movie => {
    let { vote_count, title, cast, genres, production_companies } = movie;
    cast = cast.map(numericalId => actorIds[numericalId]); // use a object keys loop to refuse null vals
    productionCompanies = production_companies.map(numericalId => companyIds[numericalId]);
    genres = genres.map(genre => genre.name);
    movie = { vote_count, title, cast, genres, production_companies };
    return movie;
  })
  return Movie.insertMany(newMovieData)
}

function generateIDS (data, docs) {
  return data.reduce((acc, item, ind) => {
    acc[item.id] = docs[ind]._id
    return acc;
  }, {});
}

function seedDB () {
  return mongoose.connection.dropDatabase()
  .then(() => {
    console.log('Seeding DB, initial database drop.');
    newActorData = actorData.map(actor => {
      actor.AKA = actor.also_known_as;
      return actor;
    });
    return Promise.all([
      Company.insertMany(companyData),
      Actor.insertMany(actorData)
    ]);
  })
  .then(([companyDocs, actorDocs]) => {
    console.log(`inserted ${companyDocs.length} companies`);
    console.log(`inserted ${actorDocs.length} Actors`);
    return Promise.all([seedMoviedb(companyDocs, actorDocs), companyDocs, actorDocs])
  })
  .then(([movieData, companyDocs, actorDocs]) => {
    return {
      movieData,
      companyDocs,
      actorDocs
    }
  })
  .catch(err => console.log({err}))
}

module.exports = seedDB;
