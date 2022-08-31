const express = require('express');

const htmlRouter = require('./htmlRoutes');
const apiRouter = require('./apiRoutes');

const app = express();

app.use('/htmlRoutes', htmlRouter);
app.use('/apiRoutes', apiRouter);

module.exports = app;