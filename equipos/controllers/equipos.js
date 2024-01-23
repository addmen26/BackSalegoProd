"use strict";

const service = require('../services/equipos');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getEquipos(req, res) {
    
    const resultado = await service.getEquipos(req);
    res.status(resultado.status).send(resultado.data);
}



 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function crearEquipos(req, res) {
    const resultado = await service.crearEquipos(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putEquipos(req, res) {
   
     let resultado = await service.putEquipos(req);
     res.status(resultado.status).send(resultado.data);
}
 
async function  updateUserEquipos(req, res) {
  let usuario = await service.updateUserEquipos(req);
  res.status(usuario.status).send(usuario.data);
}
async function  eliminarEquipos(req, res) {
  let usuario = await service.eliminarEquipos(req);
  res.status(usuario.status).send(usuario.data);
}

module.exports = {
   
  getEquipos, 
  crearEquipos,
  putEquipos,
  updateUserEquipos,
  eliminarEquipos
  
}