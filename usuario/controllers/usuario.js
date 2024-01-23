'use strict';

const service = require('../services/usuario');
const correo = require('../services/correo');

// Creamos un nuevo usuario
async function post(req, res) {
    const usuario = await service.crearUsuario(req);
    res.status(usuario.status).send(usuario.data);

}

// Obtenemos el usuario
async function getUsuario(req, res) {
    const usuario = await service.getUsuario(req);
    res.status(usuario.status).send(usuario.data);
}

// Obtenemos el usuario tecnico
async function getUsuariosTecnicos(req, res) {
    const usuario = await service.getUsuariosTecnicos(req);
    res.status(usuario.status).send(usuario.data);
}

// Actualizamos el usuario
async function put(req, res) {
    let usuario = await service.updateUsuario(req);
    res.status(usuario.status).send(usuario.data);
}
// Actualizamos el CONTRASEña
async function putContraseña(req, res) {
    let usuario = await service.updateContraseña(req);
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

// Obtenemos el usuario
async function getRoles(req, res) {
    const usuario = await service.getRoles(req);
    console.log(usuario)
    res.status(usuario.status).send(usuario.data);
}

// Obtenemos el usuario
async function getTipo(req, res) {
    const usuario = await service.getTipo(req);
    console.log(usuario)
    res.status(usuario.status).send(usuario.data);
}
// Obtenemos el usuario
async function getUsuarios(req, res) {
    const usuario = await service.getUsuarios(req);
    console.log(usuario)
    res.status(usuario.status).send(usuario.data);
}
// Obtenemos el usuario
async function getUsuariosEquipos(req, res) {
    const usuario = await service.getUsuariosEquipos(req);
    console.log(usuario)
    res.status(usuario.status).send(usuario.data);
}

// Obtenemos el usuario
async function getUsuarioSalego(req, res) {
    const usuario = await service.getUsuarioSalego(req);
    res.status(usuario.status).send(usuario.data);
}
module.exports = {
    post,
    put,
    putContraseña,
    getUsuario,
    getUsuarios,
    getUsuariosEquipos,
    getUsuariosTecnicos,
    getRoles,
    getTipo,
    enviarCorreoCuentaCreada,
    getUsuarioSalego
};