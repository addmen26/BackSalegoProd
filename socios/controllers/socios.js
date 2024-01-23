"use strict";

const service = require('../services/socios');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getSocios(req, res) {
    
    const resultado = await service.getSocios(req);
    res.status(resultado.status).send(resultado.data);
}



 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function postSocios(req, res) {
    const resultado = await service.crearSocios(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putSocios(req, res) {
     const params = req.body;
     const id = req.params.id;
     let resultado = await service.putSocios(id, params);
     res.status(resultado.status).send(resultado.data);
}
 

module.exports = {
   
  getSocios, 
  postSocios,
  putSocios,

}