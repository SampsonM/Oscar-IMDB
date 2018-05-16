process.env.NODE_ENV = 'test';
const app = require('../app');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const request = require('supertest')(app);
const { expect } = require('chai');
const seedDB = require('../seeds/seed');

describe('/api', () => {
  beforeEach(() => {
    return seedDB()
      .then(data => {
        console.log(data)
      })
  })
  after(() => {
    return mongoose.connection.close()
      .then(() => console.log('disconnected'))
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
    it('GET /companies/:compnay_id should return company by id', () => {
      // return request
        // .get(`/companies/${}`)
    })
  })
}) 
