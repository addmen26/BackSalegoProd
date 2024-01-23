'use strict';

var express = require('express');
var Controller = require('../controllers/categorias');
var api = express.Router();


api.get('/categorias/', Controller.getCategorias);
api.post('/crearcategorias/', Controller.postCategorias);
api.put('/actualizarcategorias', Controller.putCategorias);


module.exports = api;