var express = require('express');

var Controller = require('../controllers/clientesController');

var api = express.Router();


api.get('/clientes', Controller.getAllClientes);
api.post('/clientes',Controller.postCliente);
api.put('/clientes',Controller.putCliente);


module.exports = api;




