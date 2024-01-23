'use strict';
const multer = require('multer');
const XLSX = require('xlsx');
var express = require('express');
var mysql      = require('mysql');
var Controller = require('../controllers/excel');
var api = express.Router();
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  var upload = multer({ storage: storage })

  const db = mysql.createConnection({
    host: 'localhost',
   user: 'root',
    password: 'root',
    database: 'paluz',
  })
 db.connect(function (err) {
 if (err) {
      return console.error('error: ' + err.message)
    }
    console.log('Database connected.')
  })

api.get('/file/', Controller.getFile);
api.post('/cargarfile', Controller.postUploadFile);
api.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    leerexcel(file.path);
   
  })


  function leerexcel(ruta){
    const workbook = XLSX.readFile(ruta);
    
    const workbookSheets = workbook.SheetNames;
    const sheet =workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
    
    console.log(dataExcel);
    // for(item of dataExcel){
    //     console.log(item['Nombre del Representante']);
       
        // var sql = "INSERT INTO representantes (nombre, ci) VALUES ?";
        // var values = [
        //   [item.Title, item.Description],
         
        // ];
        // db.query(sql, [values], function (err, result) {
        //   if (err) throw err;
        //   console.log("Number of records inserted: " + result.affectedRows);
        // });
    
    //}
    var item;
    
     for(item of dataExcel){
    console.log(item.CI);
    var p = isNaN(item.FE)
    var l = false
    
    let fechN = convertir(item.FN)
    //console.log(fechN)
    
    let fechE = convertir(item.FE)
     //console.log(fechE)
     let cedula = codgioCedula(item.CI)
     console.log(cedula)
    
    // var sql1 = "INSERT INTO representantes (celular,nombre, apellido,cedula) VALUES ?";
    // var values1 = [
    //   [item.TR,item.NR,item.AR,item.CI],
    
    // ];
    // db.query(sql1, [values1], function (err, result) {
    //   if (err) throw err;
    // console.log("Number of records inserted: " + result.affectedRows);
    // });
    
    
          var  sql = "INSERT INTO niñoscinco (estado,municipio,parroquia,centro,comunidad,grupo_etnico,tipo_ingreso,nombre_rep,apellido_rep,telefono_rep,cedula,nombre,apellido,sexo,fecha_nacimiento,fecha_evaluacion,edad,lactancia,veces,biberon,otros_alimentos,agua_hervida,agua_filtrada,agua_sintratar,gripe_tos,fiebre,diarrea,vomito,paludismo_malaria,discapacidad,edema,circunferencia,consejeria,albendazol,micronutrientes,lns_mq,ruft,dosis,resultados_seguimiento,observaciones,clasificacion_pb) VALUES ?";
    
          var values = [
      [item.Estado, item.Municipio,item.Parroquia,item.CAS,item.Comunidad,item.GE,item.TI,item.NR,item.AR,item.TR,cedula,item.Nombres,item.Apellidos,item.Sexo,fechN,fechE,item.E,item.RLM,item.VD,item.UB,item.OA,item.AH,item.AF,item.AST,item.GTUS,item.FUS,item.DUS,item.Vomito,item.PM,item.Discapacidad,item.Edema,item.CMB,item.CPC,item.Albendazol,item.Micronutrientes,item.LNSMQ,item.RUTF,item.Dosis,item.RS,item.Observaciones,item.PB],
       
      ];
         db.query(sql, [values], function (err, result) {
          if (err) throw err;
         console.log("Number of records inserted: " + result.affectedRows);
        });
    
    
    //     var  sql = "INSERT INTO mel (estado,municipio,parroquia,centro_atencion,grupo_etnico,tipo_ingreso,cedula,nombre,apellido,sexo,fecha_nacimiento,gestante,semana_gestacion,lactancia,edema,fecha_evaluacion,edad,circunferencia_brazo,agua_filtrada,agua_sintratar,gripe_tos,fiebre,diarrea,vomito,paludismo_malaria,discapacidad,edema,circunferencia,consejeria,albendazol,micronutrientes,lns_mq,ruft,dosis,resultados_seguimiento,observaciones,clasificacion_pb) VALUES ?";
    
    //     var values = [
    // [item.Estado, item.Municipio,item.Parroquia,item.CAS,item.Comunidad,item.GE,item.TI,item.NR,item.AR,item.TR,cedula,item.Nombres,item.Apellidos,item.Sexo,fechN,fechE,item.E,item.RLM,item.VD,item.UB,item.OA,item.AH,item.AF,item.AST,item.GTUS,item.FUS,item.DUS,item.Vomito,item.PM,item.Discapacidad,item.Edema,item.CMB,item.CPC,item.Albendazol,item.Micronutrientes,item.LNSMQ,item.RUTF,item.Dosis,item.RS,item.Observaciones,item.PB],
     
    // ];
       db.query(sql, [values], function (err, result) {
        if (err) throw err;
       console.log("Number of records inserted: " + result.affectedRows);
      });
    
    
    
    
     }
    
    
    }
    function codgioCedula(dato)
    {
      if(dato == "N/T"){
        
        const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            let a = today.toLocaleDateString();
            let b = Math.floor(Math.random() * 9999);
            
             let result = a;
    let result1 = result.split("/").join('');
        
            let c = result1;
            let codigo = 'U'+c+b;
    
            
        return codigo
      }else{
        return dato
      }
    }
    function convertir(dato)
    {
      if(dato == "S/D"){
        console.log("sin")
        var data ='S/D'
        return 
      }
      
      if (!isNaN(dato)) {
       var d= new Date(Math.round((dato - 25569)*86400*1000));
       var df = d.toLocaleDateString("fr-CA")
      //  console.log(df );
      //  console.log(item.CI)
       //var fecha = item.FE
        // console.log( fecha.slice(0,2));
        // console.log( fecha.slice(3,5));
        // console.log( fecha.slice(6,10));
        //var fecahaForm = fecha.slice(6,10)+'-'+fecha.slice(3,5)+'-'+fecha.slice(0,2);
        // console.log(fecha.length);
        // console.log(fecahaForm);
        // var  sql = "INSERT INTO niñoscinco (estado,municipio,parroquia,centro,comunidad,grupo_etnico,tipo_ingreso,nombre_rep,apellido_rep,telefono_rep,cedula,nombre,apellido,sexo,fecha_nacimiento,fecha_evaluacion,edad,lactancia,veces,biberon,otros_alimentos,agua_hervida,agua_filtrada,agua_sintratar,gripe_tos,fiebre,diarrea,vomito,paludismo_malaria,discapacidad,edema,circunferencia,consejeria,albendazol,micronutrientes,lns_mq,ruft,dosis,resultados_seguimiento,observaciones,clasificacion_pb) VALUES ?";
          
        //          var values = [
        //       [item.Estado, item.Municipio,item.Parroquia,item.CAS,item.Comunidad,item.GE,item.TI,item.NR,item.AR,item.TR,item.CI,item.Nombres,item.Apellidos,item.Sexo,df,fecahaForm,item.E,item.RLM,item.VD,item.UB,item.OA,item.AH,item.AF,item.AST,item.GTUS,item.FUS,item.DUS,item.Vomito,item.PM,item.Discapacidad,item.Edema,item.CMB,item.CPC,item.Albendazol,item.Micronutrientes,item.LNSMQ,item.RUTF,item.Dosis,item.RS,item.Observaciones,item.PB],
             
        //       ];
        //        db.query(sql, [values], function (err, result) {
        //          if (err) throw err;
        //        console.log("Number of records inserted: " + result.affectedRows);
        //        });
        var data =df
        return data
       
      }else{
        if(dato == "SD"){
          console.log("sin")
          var data ='Sin Datos'
          return data
        }else{
          //var fecha = item.FE
        // console.log( fecha.slice(0,2));
        // console.log( fecha.slice(3,5));
        // console.log( fecha.slice(6,10));
       // var fecahaForm = fecha.slice(6,10)+'-'+fecha.slice(3,5)+'-'+fecha.slice(0,2);
      
        var fechaN = dato;
        // console.log( fechaN.slice(0,2));
        // console.log( fechaN.slice(3,5));
        // console.log( fechaN.slice(6,10));
        var fecahaFormN = fechaN.slice(6,10)+'-'+fechaN.slice(3,5)+'-'+fechaN.slice(0,2);
        // console.log(fecha.length);
        // console.log(fecahaForm);
        // console.log(fechaN.length);
        // console.log(fecahaFormN);
      
        // var  sql = "INSERT INTO niñoscinco (estado,municipio,parroquia,centro,comunidad,grupo_etnico,tipo_ingreso,nombre_rep,apellido_rep,telefono_rep,cedula,nombre,apellido,sexo,fecha_nacimiento,fecha_evaluacion,edad,lactancia,veces,biberon,otros_alimentos,agua_hervida,agua_filtrada,agua_sintratar,gripe_tos,fiebre,diarrea,vomito,paludismo_malaria,discapacidad,edema,circunferencia,consejeria,albendazol,micronutrientes,lns_mq,ruft,dosis,resultados_seguimiento,observaciones,clasificacion_pb) VALUES ?";
          
        //          var values = [
        //       [item.Estado, item.Municipio,item.Parroquia,item.CAS,item.Comunidad,item.GE,item.TI,item.NR,item.AR,item.TR,item.CI,item.Nombres,item.Apellidos,item.Sexo,fecahaFormN,fecahaForm,item.E,item.RLM,item.VD,item.UB,item.OA,item.AH,item.AF,item.AST,item.GTUS,item.FUS,item.DUS,item.Vomito,item.PM,item.Discapacidad,item.Edema,item.CMB,item.CPC,item.Albendazol,item.Micronutrientes,item.LNSMQ,item.RUTF,item.Dosis,item.RS,item.Observaciones,item.PB],
             
        //       ];
        //        db.query(sql, [values], function (err, result) {
        //          if (err) throw err;
        //        console.log("Number of records inserted: " + result.affectedRows);
        //        });
        var data = fecahaFormN;
        return data
        }
        
          
          
                
      
      
      }
    
    }

module.exports = api;