"use strict";

const service = require('../services/sector');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getSector(req, res) {
    
    const resultado = await service.getSector(req);
    res.status(resultado.status).send(resultado.data);
}



 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function postSector(req, res) {
    const resultado = await service.crearSector(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putSector(req, res) {
     const params = req.body;
     const id = req.params.id;
     let resultado = await service.putSector(id, params);
     res.status(resultado.status).send(resultado.data);
}
 

module.exports = {
   
  getSector, 
  postSector,
  putSector,

}