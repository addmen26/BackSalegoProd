'use strict';

var express = require('express');
// var md_auth = require('../../usuarios/middlewares/authenticated');
var Controller = require('../controllers/usuario');
// var { ensureAuth } = require('../../usuarios/middlewares/authenticated');
var api = express.Router();

api.post('/perfil/usuario/', Controller.post);
api.put('/perfil/cuentausuario/', Controller.put);
api.put('/perfil/contrasena/', Controller.putContraseña);
api.get('/perfil/:nIdUsuario', Controller.getUsuario);
api.get('/usuarios', Controller.getUsuarios);
api.get('/usuariosequipos', Controller.getUsuariosEquipos);
api.get('/usuariostecnicos', Controller.getUsuariosTecnicos);
api.get('/rol', Controller.getRoles);
api.get('/tipo', Controller.getTipo)
api.get('/usuariosalego', Controller.getUsuarioSalego)
module.exports = api;