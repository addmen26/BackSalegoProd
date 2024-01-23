"use strict";

const service = require('../services/convocatoria');

 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getConvocatoria(req, res) {
    
    const resultado = await service.getConvocatoria(req);
    res.status(resultado.status).send(resultado.data);
}
// ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getTotales(req, res) {
    console.log('hola')
    const resultado = await service.getTotales(req);
    res.status(resultado.status).send(resultado.data);
}
// ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getNinas(req, res) {
    console.log('hola')
    const resultado = await service.getNinas(req);
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getNinos(req, res) {
    console.log('hola')
    const resultado = await service.getNinos(req);
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que obtiene totales por meses
  // ************************
  async function getMeses(req, res) {
    console.log('hola')
    const resultado = await service.getMeses(req);
    res.status(resultado.status).send(resultado.data);
}
// ************************
  // Metodo que obtiene totales por semanas
  // ************************
  async function getSemanas(req, res) {
    console.log('hola')
    const resultado = await service.getSemanas(req);
    res.status(resultado.status).send(resultado.data);
}
 // ************************
  // Metodo que obtiene preguntas eliminar
  // ************************
  async function getPreguntasEliminar(req, res) {
    const resultado = await service.getPreguntasEliminar(req);
    res.status(resultado.status).send(resultado.data);
}
 // ************************
  // Metodo que obtiene preguntas del portal
  // ************************
  async function getPreguntasPortal(req, res) {
    const resultado = await service.getPreguntasPortal(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que inserta posible preguntas a publicar
  // ************************
  async function crearConvocatoria(req, res) {
    const resultado = await service.crearConvocatoria(req);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza posible preguntas a publicar
  // ************************
  async function putPreguntasPublicadas(req, res) {
     const params = req.body;
     const nPregunta = req.params.nPregunta;
     let resultado = await service.putPreguntasnoPublicadas(nPregunta, params);
     res.status(resultado.status).send(resultado.data);
}
 // ************************
  // Metodo que elimina posible preguntas a publicar
  // ************************
  async function deletePreguntasPublicadas(req, res) {
    const params = req.body;
    const nPregunta = req.params.nPregunta;
    let resultado = await service.eliminarPreguntasPublicadas(nPregunta);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que activa posible preguntas 
  // ************************
  async function activarPreguntasPublicadas(req, res) {
    const params = req.body;
    const nPregunta = req.params.nPregunta;
    let resultado = await service.activarPreguntasPublicadas(nPregunta);
    res.status(resultado.status).send(resultado.data);
}

async function getPreguntaRegistrada(req, res) {
  //Obtenemos el correo
  let resultado = await service.getExistePregunta(req);
  res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que guarda  Preguntas al Portal
  // ************************
  async function postGuardarPreguntasPortal(req, res) {
    let resultado = await service.createPreguntasPortal(req);
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que Busca Preguntas Prublicadas
  // ************************

async function buscarPrepuntasPublicadas(req, res) {
    let resultado = await service.getPreguntasPublicadas(req.body);
    res.status(resultado.status).send(resultado.data);
  }

 // ************************
  // Metodo que actualiza la pregutna si esta leida o no
  // ************************
  async function putPreguntasLeidas(req, res) {
    const params = req.body;
    const nPregunta = req.params.nPregunta;
    let resultado = await service.preguntasLeidas(nPregunta);
    res.status(resultado.status).send(resultado.data);
}

 // ************************
  // Metodo que actualiza la pregutna si esta leida o no
  // ************************
  async function putPreguntasnoLeidas(req, res) {
    const params = req.body;
    const nPregunta = req.params.nPregunta;
    let resultado = await service.preguntasNoLeidas(nPregunta);
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que publica las preguntas
  // ************************
  async function postPublicaPreguntas(req, res) {
   
    let resultado = await service.publicarPreguntas();
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que actualiza el orden de la pregunta
  // ************************
  async function ordenPregunta(req, res) {
    const params = req.body;
    const nPregunta = req.params.nPregunta;
    let resultado = await service.ordenPregunta(nPregunta, params);
    res.status(resultado.status).send(resultado.data);
}

// ************************
  // Metodo que obtiene la ultima fecha de modificacion
  // ************************
  async function getUltimaFecha(req, res) {
    const resultado = await service.getUltimaFechaPregunta(req);
    res.status(resultado.status).send(resultado.data);
}
// ************************
  // Beneficiarios
  // ************************
async function getBeneficiarios(req, res) {
  const resultado = await service.getBeneficiarios(req);
  res.status(resultado.status).send(resultado.data);
}
 // ************************
  // Metodo que obtiene preguntas ha publicar en el portal
  // ************************
  async function getMel(req, res) {
    
    const resultado = await service.getMel(req);
    res.status(resultado.status).send(resultado.data);
}

async function  aceptarConvocatoria(req, res) {
  let usuario = await service.aceptarConvocatoria(req);
  res.status(usuario.status).send(usuario.data);
}
async function  rechazarConvocatoria(req, res) {
  let usuario = await service.rechazarConvocatoria(req);
  res.status(usuario.status).send(usuario.data);
}
async function  cancelarConvocatoria(req, res) {
  let usuario = await service.cancelarConvocatoria(req);
  res.status(usuario.status).send(usuario.data);
}
async function getAceptada(req, res) {
    
  const resultado = await service.getAceptada(req);
  res.status(resultado.status).send(resultado.data);
}
async function getCancelados(req, res) {
    
  const resultado = await service.getCancelados(req);
  res.status(resultado.status).send(resultado.data);
}
async function getEspera(req, res) {
    
  const resultado = await service.getEspera(req);
  res.status(resultado.status).send(resultado.data);
}
async function getRechazada(req, res) {
    
  const resultado = await service.getRechazada(req);
  res.status(resultado.status).send(resultado.data);
}
async function getPropias(req, res) {
    
  const resultado = await service.getPropias(req);
  res.status(resultado.status).send(resultado.data);
}
async function  asistenciaAsignar(req, res) {
  let usuario = await service.asistenciaAsignar(req);
  res.status(usuario.status).send(usuario.data);
}
async function  updateConvocatoria(req, res) {
  let usuario = await service.updateConvocatoria(req);
  res.status(usuario.status).send(usuario.data);
}
async function getConvProyecto(req, res) {
    
  const resultado = await service.getConvProyecto(req);
  res.status(resultado.status).send(resultado.data);
}
module.exports = {
   
  // getTotales,
  // getMel, 
  // getPreguntas,
  // getNinos,
  // getNinas,
  // getMeses,
  // getSemanas,
  // getBeneficiarios,
  // getPreguntasEliminar,
  updateConvocatoria,
  asistenciaAsignar,
  aceptarConvocatoria,
   getConvocatoria,
  crearConvocatoria,
  rechazarConvocatoria,
  cancelarConvocatoria,
  getAceptada,
  getCancelados,
  getEspera,
  getRechazada,
  getPropias,
  getConvProyecto
  // putPreguntasPublicadas,
  // deletePreguntasPublicadas,
  // getPreguntaRegistrada,
  // postGuardarPreguntasPortal,
  // buscarPrepuntasPublicadas,
  // putPreguntasLeidas,
  // postPublicaPreguntas,
  // ordenPregunta,
  // activarPreguntasPublicadas,
  // putPreguntasnoLeidas,
  // getUltimaFecha
}