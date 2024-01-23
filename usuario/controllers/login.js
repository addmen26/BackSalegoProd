'use strict';

const login = require('../services/login');
  // ************************
  // Metodo de hacer login
  // ************************
async function post(req, res) {
  
    let log = await login.login(req.body);
    
    res.status(log.status).send(log.data);
}
  // ************************
  // Metodo que guarda el did de login
  // ************************
async function postDid(req, res) {
    let log = await login.loginDid(req.body);
    res.status(log.status).send(log.data);
}

  // ************************
  // Metodo de guardo de membresia
  // ************************
async function membresiaTipo(req, res) {
    let log = await login.tipoMembresia(req.params.id);
    res.status(log.status).send(log.data);
}
  // ************************
  // Metodo obtiene datos del login
  // ************************
async function get(req, res) {
    let log = await login.login(req);
    res.status(log.status).send(log.data);
}
  // ************************
  // Metodo que envia correo de recuperacion
  // ************************
async function postEnviarCorreoRecuperacion(req, res) {
    let log = await login.enviarCorreo(req.body);
    res.status(log.status).send(log.data);
}
  // ************************
  // Metodo que restablece contraseña
  // ************************
async function postReestablecerContrasena(req, res) {
    let log = await login.reestablecerContrasena(req.body);
    res.status(log.status).send(log.data);
}

module.exports = {
    post,
    postDid,
    get,
    postEnviarCorreoRecuperacion,
    postReestablecerContrasena,
    membresiaTipo
};