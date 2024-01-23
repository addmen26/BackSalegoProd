'use strict';

var express = require('express');
var Controller = require('../controllers/profesiones');
var api = express.Router();


api.get('/profesiones/', Controller.getProfesiones);
api.get('/profesionescat/', Controller.getProfesionesCat);
api.post('/crearprofesiones/', Controller.postProfesiones);
api.put('/actualizarprofesiones', Controller.putProfesiones);


module.exports = api;