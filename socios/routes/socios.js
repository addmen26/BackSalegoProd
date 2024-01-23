'use strict';

var express = require('express');
var Controller = require('../controllers/socios');
var api = express.Router();


api.get('/socios/', Controller.getSocios);
api.post('/crearsocios/', Controller.postSocios);
api.put('/actualizarsocios', Controller.putSocios);


module.exports = api;