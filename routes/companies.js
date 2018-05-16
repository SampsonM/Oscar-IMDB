const companyRouter = require('express').Router();
const { 
  getCompanies,
  getCompanyById,
  postCompany
} = require('../controllers/companies');

companyRouter.post('/', postCompany)

companyRouter.get('/', getCompanies)
companyRouter.get('/:company_id', getCompanyById)

module.exports = companyRouter;
