const app = require('../app');
const Company = require('../models/companies');

function getCompanies (req, res, next) {
  Company.find()
    .then(companies => {
      return res.send(companies)
    })
    .catch(err => console.log('err getting companies: ', err))
}

function getCompanyById (req, res, next) {
  const companyId = req.params.company_id;
  
  Company.find({ _id: companyId })
    .then(company => {
      return res.send(company)
    })
    .catch(err => {
      console.log('err getting company by ID: ')
    })
}

function postCompany (res, req, next) {
  Company.find()
    .then(companies => {
      console.log(companies)
    })
}

module.exports = {
  getCompanies,
  getCompanyById,
  postCompany
};
