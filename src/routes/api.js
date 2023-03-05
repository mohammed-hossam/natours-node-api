const express = require('express');

const toursRouter = require('./tours/tours.router');
const usersRouter = require('./users/users.router');

const api = express.Router();

api.use('/tours', toursRouter);
api.use('/users', usersRouter);

module.exports = api;
