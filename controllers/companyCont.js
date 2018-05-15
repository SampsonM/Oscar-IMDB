const app = require('../app');
const Company = require('../models/companiesModel');

function getCompanies (req, res, next) {
  companies.find()
    .then(companies => {
      return res.send(companies)
    })
    .catch(err => console.log('err getting companies: ', err))
}

function getCompanyById (res, res, next) {
  const companyId = req.params.company_id;
  
  companies.find({ _id: companyId })
    .then(company => {
      return res.send(company)
    })
    .then(err => console.log('err getting company by ID: ', err))
}

function postCompany (res, req, next) {
  companies.
}

module.exports = {
  getCompanies,
  getCompanyById,
  postCompany
};