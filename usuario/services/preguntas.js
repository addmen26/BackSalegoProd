'use strict';

const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getPreguntas(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from representantes`,
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
  // Metodo que obtiene preguntas eliminadas
  // ************************

  async function getPreguntasEliminar(req) {
    try {
        
        const data = await reg_preguntaspublicacionesportal.findAll({
            attributes: [
                "nPregunta",
                "cPregunta",
                "cRespuesta",
                "bPublicada",
                "nOrden",
                "bActivo",
                "dFecha_UltimaModificacion"
            ],
            where: { bActivo: 0, bPublicada: 0 },
        }); 

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
  // Metodo que obtiene preguntas sin leer y leidas
  // ************************

  async function getPreguntasPortal(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from reg_preguntasportal order by dFecha_Registro DESC`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );

        if (data.length === 0) {
            return {
                status: 400,
                error: 'No hay preguntas del portal.',
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
  // Metodo que inserta las preguntas para luego publicarlas
  // *

  async function crearPreguntasPublicadas(req) {

    let data;
    console.log(req.body);
   
       try {
  
   
           const cPregunta = req.body.cPregunta;
           const cRespuesta = req.body.cRespuesta;
           const nOrden = 0;
           const bPublicada = 1;
           const bActivo = 1;
           const dFecha_Registro = new Date();
           const dFecha_UltimaModificacion = new Date();
           const dFecha_Eliminación = null;
   
           data = await reg_preguntaspublicacionesportal.create({
               cPregunta,
               cRespuesta,
               nOrden,
               bPublicada,
               bActivo,
               dFecha_Registro,
               dFecha_UltimaModificacion,
               dFecha_Eliminación
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

   
   async function putPreguntasnoPublicadas(nPregunta, params) {
    try {
        const data = await reg_preguntaspublicacionesportal.update({
           cPregunta: params.cPregunta,
           cRespuesta: params.cRespuesta,
           //dFecha_UltimaModificacion: new Date(),
        }, { where: { nPregunta: nPregunta, bActivo:1  } });

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

   /*
  async function publicarPreguntas(req ,res) {
    

        //Se obtiene los datos de las posible pregutnas a publicar
        const data = await reg_preguntaspublicacionesportal.findAll({
            attributes: [
                "nPregunta",
                "cPregunta",
                "cRespuesta",
                "bPublicada",
                "nOrden",
                "bActivo",
                "dFecha_UltimaModificacion"
            ],
            where: { bActivo: 1, bPublicada: 0 },
        });  
            var Promises=[];
            for(var i = 0 ; i<data.length;i++)
            {
                var newPromise=reg_preguntaspublicacionesportal.update({
                    bPublicada:data[i]['bPublicada'] = 1,
                    dFecha_UltimaModificacion: data[i]['dFecha_UltimaModificacion'] = new Date() 
                },            
                {
                    
                    where:{nPregunta:  data[i].nPregunta}
                });
                Promises.push(newPromise);
            };
            return Promise.all(Promises).then(function(result)
            {
                return {
                    status: 200,
                    error: "",
                    data:  data,
                }
    
            }).catch(function(err){
    
                return {
                    status: 500,
                    error: err,
                    data:  err
                }
            });
       
  
}

*/
 // ************************
  // Metodo busca si la pregunta existe
  // *
async function getExistePregunta(req) {
    try {
        const data = await reg_preguntaspublicacionesportal.findAll({
            where: { cPregunta: req.params.pregunta, bActivo: 1 },
        });
        if (data === null || data.length < 1) {
            return {
                status: 200,
                error: "",
                data: {
                    mensaje: 'La pregunta no esta registrada',
                    id: 1
                },
            };
        } else {
            return {
                status: 200,
                error: "",
                data: {
                    mensaje: 'La pregunta ya existe',
                    id: 2
                },
            };
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}
// ************************
// Metodo que cambia el estatus de leidas o no
// ************************
async function preguntasLeidas(nPregunta) {
    try {
        const data = await reg_preguntasportal.update({
           bLeida: 1,
        }, { where: { nPregunta: nPregunta} });


        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al cambiar estatus de pregunta, verifique la informacion.",
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
// Metodo que cambia el estatus de leidas o no
// ************************
async function preguntasNoLeidas(nPregunta) {
    try {
        const data = await reg_preguntasportal.update({
           bLeida: 0,
        }, { where: { nPregunta: nPregunta} });


        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al cambiar estatus de pregunta, verifique la informacion.",
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
// Metodo que que crea Preguntas Portal
// ************************
async function createPreguntasPortal(req) {

    let data;
    console.log(req.body);
   
       try {
  
   
           const cPregunta = req.body.cPregunta;
           const bLeida = 0;
           const dFecha_Registro = new Date();
          
   
           data = await reg_preguntasportal.create({
               cPregunta,
               bLeida,
               dFecha_Registro,
              
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
// Metodo que obtiene preguntas publicadas
// ************************
async function getPreguntasPublicadas(req) {
    let data;
    try {

 //    

        data = await sequelize.query(
            `
            select
                cPregunta as cPregunta,
                cRespuesta as cRespuesta
            from reg_preguntaspublicacionesportal
            where 
             bPublicada = 1
            and bActivo = 1 
            order by nOrden DESC
            `,
            {
                type: QueryTypes.SELECT
            }
        );

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'De momento no existen preguntas frecuentes, si lo deseas, puedes enviarnos tu pregunta.',
                data,
            };
        } else {
            return {
                status: 200,
                error: '',
                data,
                
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
// Metodo que actualza el orden de los preguntas
// ************************
async function ordenPregunta(nPregunta, params) {
    try {
        const data = await reg_preguntaspublicacionesportal.update({
            nOrden: params.nOrden,
            dFecha_UltimaModificacion: new Date()
        }, { where: { nPregunta: nPregunta} });


        if (data === null || data.length < 1) {
            return {
                status: 500,
                error: "Problema al cambiar orden de la pregunta, verifique la informacion.",
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
  // Metodo que se trae unica fecha
  // ************************

  async function getUltimaFechaPregunta(req) {
    try {
        
        const data = await sequelize.query(
            `
            select * from reg_preguntaspublicacionesportal where bActivo = 1 order by dFecha_UltimaModificacion desc limit 1`,
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


module.exports = {

  getPreguntas,
  getPreguntasEliminar,
  getPreguntasPortal,
  crearPreguntasPublicadas,
  putPreguntasnoPublicadas,
  eliminarPreguntasPublicadas,
  activarPreguntasPublicadas,
  //publicarPreguntas,
  getExistePregunta,
  preguntasLeidas,
  createPreguntasPortal,
  getPreguntasPublicadas,
  ordenPregunta,
  preguntasNoLeidas,
  getUltimaFechaPregunta

};