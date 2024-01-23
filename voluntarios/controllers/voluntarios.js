'use strict';

const service = require('../services/voluntarios');


// Creamos un nuevo usuario
async function post(req, res) {
    const usuario = await service.crearVoluntario(req);
    res.status(usuario.status).send(usuario.data);

}
// Creamos un nuevo usuario
async function postU(req, res) {
    const usuario = await service.crearUsuario(req);
    res.status(usuario.status).send(usuario.data);
    console.log(usuario.status,"aja llego aqui")

}
// Obtenemos el usuario
async function getVoluntarios(req, res) {
    const usuario = await service.getVoluntarios(req);
    res.status(usuario.status).send(usuario.data);
}



// Actualizamos el usuario
async function put(req, res) {
    let usuario = await service.updateUsuario(req);
    res.status(usuario.status).send(usuario.data);
}

// Envía un correo de notificación cuenta creada
async function enviarCorreoCuentaCreada(req, res) {
    try {
        const res = await correo.enviar(req.body, 2, 'CUENTA_CREADA_MARKET');
        return {
            status: 200,
            error: '',
            data: res
        }
    }
    catch (err) {
        return {
            status: 500,
            error: 'Error al enviar el correo',
            data: {}
        }
    }
}
// Actualizamos el usuario
async function enviarCorreoRechazo(req, res) {
    let usuario = await service.enviarCorreoRechazo(req);
    res.status(usuario.status).send(usuario.data);
}

module.exports = {
    post,
    postU,
    put,
    getVoluntarios,
    enviarCorreoCuentaCreada,
    enviarCorreoRechazo
};