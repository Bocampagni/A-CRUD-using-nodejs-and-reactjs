const express = require('express');
const routes = express.Router();
const ProductControl = require('../src/controllers/ProductoController');


routes.get("/products", ProductControl.index);

module.exports = routes;