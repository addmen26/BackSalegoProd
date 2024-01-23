'use strict';

var express = require('express');
var Controller = require('../controllers/proyectos');
var api = express.Router();


api.get('/proyectos/', Controller.getProyectos);
api.post('/crearproyectos/', Controller.postProyectos);
api.put('/actualizarproyectos', Controller.putProyectos);
api.put('/actualizarproyecto', Controller.actualizarProyectos);
api.get('/creartabla/', Controller.creaTablas);
api.get('/tipoactividad/', Controller.getTipoActividad);
module.exports = api;