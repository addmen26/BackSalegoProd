'use strict';
const base_socios = require('../../models/socios');
const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getSocios(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from socios`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 400,
                error: 'No hay preguntas frecuentes.',
                data,
            };
        } else {
            return {
                status: 200,
                error: '',
                data: data
            };
        }
    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************




// ************************
  // Metodo que inserta las preguntas para luego publicarlas
  // *

  async function crearSocios(req) {

    let data;
    const params = req.body;
    console.log(req.body);
   
       try {
  
   
          
         
   
           data = await base_socios.create({
             nombre:params.nombre,
             abreviatura :params.descripcion,
             fecha_registro :new Date(),
             fecha_modificacion:new Date()
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

   // ************************
  // Metodo que actualiza las preguntas para luego publicarlas
  // *

   
   async function putSocios(id,params) {
    //const params = req.body;
    
    try {
        const data = await base_socios.update({
           nombre: params.nombre,
           abreviatura: params.abreviatura,
           //dFecha_UltimaModificacion: new Date(),
        }, { where: { id: params.codigo } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizarla el socio.",
                data,
            };
        } else {
            return {
                status: 200,
                error: "",
                data:  data,
            };
        }
    } catch (err) {
        return {
            status: 500,
            error: err,
            data: err
        };
    }
}


  // ************************
  // Metodo que elimina las preguntas para luego seran publicarlas
  // *

   






module.exports = {

  getSocios,
  crearSocios,
  putSocios,
 

  

};