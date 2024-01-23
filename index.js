'use strict'

var app = require('./app');
var port = process.env.PORT || 9000;

app.listen(port, function() {
    console.log('Servidor API funcionando');
});