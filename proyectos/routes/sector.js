'use strict';

var express = require('express');
var Controller = require('../controllers/sector');
var api = express.Router();


api.get('/sector/', Controller.getSector);
api.post('/crearsector/', Controller.postSector);
api.put('/actualizarsector', Controller.putSector);


module.exports = api;