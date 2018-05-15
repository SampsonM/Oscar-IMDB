const apiRouter = require('express').Router();
const { movieRouter, actorRouter, companyRouter } = require('./index');

apiRouter.use('/companies', companyRouter);
apiRouter.use('/actors', actorRouter);
apiRouter.use('/movies', movieRouter);

apiRouter.get('/', (req, res, next) => res.send('hello'))

module.exports = apiRouter;
