'use strict';

var express = require('express');
var Controller = require('../controllers/equipos');
var api = express.Router();


api.get('/equipos/', Controller.getEquipos);
api.post('/crearequipos/', Controller.crearEquipos);
api.put('/actualizarequipos', Controller.putEquipos);
api.put('/asignarequipo', Controller.updateUserEquipos);
api.put('/eliminarequipos', Controller.eliminarEquipos);

module.exports = api;