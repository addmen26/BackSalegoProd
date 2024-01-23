'use strict';
const base_categorias = require('../../models/categoria');
const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getCategorias(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from categoria`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 400,
                error: 'No hay Categorias',
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

  async function crearCategorias(req) {

    let data;
    const params = req.body;
    console.log(req.body);
   
       try {
  
   
          
         
   
           data = await base_categorias.create({
            
             nombre :params.nombre,
            
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

   
   async function putCategorias(codigo,params) {
    //const params = req.body;
    console.log(codigo);
    try {
        const data = await base_categorias.update({
        
           nombre: params.nombre,
           //dFecha_UltimaModificacion: new Date(),
        }, { where: { idcategoria: params.id } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al actualizarla pregunta, verifique la informacion.",
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

   
  async function eliminarPreguntasPublicadas(nPregunta) {
    try {
        const data = await reg_preguntaspublicacionesportal.update({
           bPublicada: 0,
           bActivo: 0,
           dFecha_Eliminacion: new Date(),
        }, { where: { nPregunta: nPregunta, bActivo:1 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al eliminar la pregunta, verifique la informacion.",
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
  // Metodo que activa las preguntas que fueron desactivdas
  // *

   
  async function activarPreguntasPublicadas(nPregunta) {
    try {
        const data = await reg_preguntaspublicacionesportal.update({
           bPublicada: 1,
           bActivo: 1,
           dFecha_UltimaModificacion: new Date(),
           dFecha_Eliminacion: new Date(),
        }, { where: { nPregunta: nPregunta, bActivo:0 } });

        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al activar la pregunta, verifique la informacion.",
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
  // Metodo que publica las preguntas
  // *




module.exports = {

  getCategorias,
  crearCategorias,
  putCategorias,
  eliminarPreguntasPublicadas,
  activarPreguntasPublicadas,
  //publicarPreguntas,
  

};