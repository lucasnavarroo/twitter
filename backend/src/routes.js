const express = require("express");
const validate = require("express-validation");
const handle = require('express-async-handler')

const routes = express.Router();

const controllers = require('./app/controllers')
const validators = require('./app/validators')

module.exports = routes;