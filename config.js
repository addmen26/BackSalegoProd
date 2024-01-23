const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  URL_FRONT: process.env.URL_FRONT,
  URL_FRONT_CUENTA_CREADA: process.env.URL_FRONT_CUENTA_CREADA,
  URL_FRONT_RECUPERAR_CONTRASENA: process.env.URL_FRONT_RECUPERAR_CONTRASENA
};