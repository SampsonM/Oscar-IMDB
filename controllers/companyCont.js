const app = require('../app');
const companies = require('../models/companiesModel');

function getCompanies (req, res, next) {
  companies.find()
    .then(companies => {
      return res.send(companies)
    })
    .catch(err => console.log(err))
}

module.exports = {
  getCompanies
};