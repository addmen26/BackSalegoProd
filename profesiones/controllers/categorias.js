"use strict";

const service = require('../services/categorias');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getCategorias(req, res) {
    console.log('hola')
    const resultado = await service.getCategorias(req);
    res.status(resultado.status).send(resultado.data);
}



 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function postCategorias(req, res) {
    const resultado = await service.crearCategorias(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putCategorias(req, res) {
     const params = req.body;
     const nPregunta = req.params.nPregunta;
     let resultado = await service.putCategorias(nPregunta, params);
     res.status(resultado.status).send(resultado.data);
}
 

module.exports = {
   
  getCategorias, 
  postCategorias,
  putCategorias,

}