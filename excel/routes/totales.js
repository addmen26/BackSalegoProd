'use strict';

var express = require('express');
var Controller = require('../controllers/totales');
var api = express.Router();


api.get('/totales/', Controller.getPreguntas);
api.get('/total/', Controller.getTotales);
api.get('/ninos/', Controller.getNinos);
api.get('/meses/', Controller.getMeses);
api.get('/semanas/', Controller.getSemanas);
api.get('/preguntaseliminar/', Controller.getPreguntasEliminar);
api.get('/preguntasPortal/', Controller.getPreguntasPortal);
api.post('/crearpreguntas/', Controller.postPreguntasPublicadas);
api.put('/actualizarpreguntas/:nPregunta/', Controller.putPreguntasPublicadas);
api.put('/actualizarpreguntasleidas/:nPregunta/', Controller.putPreguntasLeidas);
api.put('/actualizarpreguntasnoleidas/:nPregunta/', Controller.putPreguntasnoLeidas);
api.delete('/deletepreguntas/:nPregunta/', Controller.deletePreguntasPublicadas);
api.delete('/activarpreguntas/:nPregunta/', Controller.activarPreguntasPublicadas);
api.get("/busquedad-pregunta/:pregunta", Controller.getPreguntaRegistrada);
api.post('/guardarpreguntasportal/', Controller.postGuardarPreguntasPortal);
api.get('/buscarpreguntasportal/', Controller.buscarPrepuntasPublicadas);
api.put('/publicarpreguntasportal/', Controller.postPublicaPreguntas);
api.put('/ordenPregunta/:nPregunta/', Controller.ordenPregunta);
api.get('/ultimafecha/', Controller.getUltimaFecha);

module.exports = api;