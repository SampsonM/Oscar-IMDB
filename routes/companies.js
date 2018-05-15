const companyRouter = require('express').Router();
const { getCompanies } = require('../controllers/company-controller');

companyRouter.get('/', getCompanies)

module.exports = companyRouter;
