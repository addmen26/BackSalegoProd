'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta';
  

// ************************
  // Metodo que crea el token
  // ************************
exports.createToken = function(cDid) {

    var payload = {
        sub: cDid,
        iat: moment().unix(),
        exp: moment().add(1, "days").unix,
    };

    return jwt.encode(payload, secret);
};