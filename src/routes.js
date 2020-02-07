const express = require('express');
const routes = express.Router();
const ProductControl = require('../src/controllers/ProductoController');


routes.get("/products", ProductControl.index);
routes.get("/products/:id", ProductControl.show);
routes.post("/products", ProductControl.store);
routes.put("/products/:id", ProductControl.update);
routes.delete("/products/:id", ProductControl.destroy);


module.exports = routes;