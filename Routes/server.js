const express = require('express');
const app = express()
const api = require('./routes/index.js');

const PORT = 3001;

app.use('/api', api);