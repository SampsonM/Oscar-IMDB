process.env.NODE_ENV = 'test';
const app = require('../app');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const request = require('supertest')(app);
const { expect } = require('chai');
const seedDB = require('../seeds/seed');

describe('/api', () => {
  let actor, movie, company;
  beforeEach(() => {
    return seedDB()
      .then(({movieData: movies, companyDocs: companies, actorDocs: actors}) => {
        company = companies[0];
        actor = actors[0];
        movie = movies[0];
        console.log('DB Seed Complete');
      })
  })
  after(() => {
    return mongoose.connection.close()
      .then(() => console.log('disconnected from DB'))
  })
  describe('/', () => {
    it('should connect and disconnect', () => {})
  })
  describe('/companies', () => {
    it('GET /companies should return all companies', () => {
      return request
        .get('/api/companies')
        .expect(200)
        .then(res => {
          expect(res.body.length).to.equal(9)
        })
    })
    it('GET /companies/:company_id should return company by id', () => {
      return request
        .get(`/api/companies/${company._id}`)
        .expect(200)
        .then(({body}) => {
          console.log(body)
        })
    })
  })
}) 
