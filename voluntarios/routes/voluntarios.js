'use strict';

var express = require('express');
// var md_auth = require('../../usuarios/middlewares/authenticated');
var Controller = require('../controllers/voluntarios');
// var { ensureAuth } = require('../../usuarios/middlewares/authenticated');
var api = express.Router();

api.post('/perfil/voluntario/', Controller.post);
api.post('/perfil/voluntarioU/', Controller.postU);
// api.put('/perfil/cuentausuario/', Controller.put);
 api.get('/voluntarios', Controller.getVoluntarios);
 api.post('/rechazo', Controller. enviarCorreoRechazo);

module.exports = api;