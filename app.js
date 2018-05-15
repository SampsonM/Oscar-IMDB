let { DB_URL } = (process.env.NODE_ENV === 'production') ? process.env : require('./config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = Promise;
const apiRouter = require('./routes/api-router');

mongoose.connect(DB_URL, () => {
  console.log('connected to mongo')
})

app.use('/api', apiRouter);

module.exports = app;
