"use strict";

const service = require('../services/profesiones');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getProfesiones(req, res) {
    console.log('hola')
    const resultado = await service.getProfesiones(req);
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getProfesionesCat(req, res) {
    console.log('hola')
    const resultado = await service.getProfesionesCat(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function postProfesiones(req, res) {
    const resultado = await service.crearProfesiones(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putProfesiones(req, res) {
     const params = req.body;
     const nPregunta = req.params.nPregunta;
     let resultado = await service.putProfesiones(nPregunta, params);
     res.status(resultado.status).send(resultado.data);
}
 

module.exports = {
   
  getProfesiones, 
  postProfesiones,
  putProfesiones,
  getProfesionesCat

}