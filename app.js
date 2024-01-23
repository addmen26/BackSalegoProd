'use strict'

const express = require('express');
const bodyParser = require('body-parser');

// agregar archivos para las tareas programadas
var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});


if (app.get('env') === 'development') {
    console.log('Rejecting node tls');
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

// Cotizaciones y Pedidos
var usuario = require('./usuario/routes/usuarioRoutes');
var totales = require('./totales/routes/totales');
var check = require('./usuario/routes/preguntas');
var login = require('./usuario/routes/login');
var proyectos = require('./proyectos/routes/proyectos');
var profesiones = require('./profesiones/routes/profesiones');
var categorias = require('./profesiones/routes/categorias');
var voluntarios = require('./voluntarios/routes/voluntarios');
var socios= require('./socios/routes/socios');
var sector= require('./proyectos/routes/sector');
var excel = require('./excel/routes/excel');
var convocatoria = require('./convocatorias/routes/convocatoria');
var equipos = require('./equipos/routes/equipos');
var litros = require('./ventaLitros/routes/litros');
var cliente = require('./cliente/routes/clientesRoutes');
// rutas
//app.use("/api/usuarios", usuarioRoutes/);
app.use('/api', usuario);
app.use('/api', totales);
app.use('/api', check);
app.use('/api', login);
app.use('/api', proyectos);
app.use('/api', profesiones);
app.use('/api', categorias);
app.use('/api',voluntarios);
app.use('/api', excel);
app.use('/api', socios);
app.use('/api', sector);
app.use('/api', convocatoria);
app.use('/api', equipos);
app.use('/api', litros);
app.use('/api', cliente);
module.exports = app;
