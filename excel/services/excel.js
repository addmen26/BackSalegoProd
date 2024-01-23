'use strict';

const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("demo_image");
// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getFile(req,res) {
    res.sendFile(__dirname + '/index.html');
}






 // ************************
  // Metodo que obtiene preguntas eliminadas
  // ************************

  async function uploadFile(req) {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
    })
    var upload = multer({ storage: storage })
var data;

try {
  
  console.log(req);
  

  data = await upload(req, res, (err) => {
  
    if(err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });

  console.log(data);
  return {
    
      status: 200,
      error: '',
      data: data,
  };

} catch (err) {
  return {
      status: 500,
      error: err,
      data: err,
  };
}
    
    
}






module.exports = {

  getFile,
  uploadFile

};