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
            select count(*) from niñoscinco
            where sexo='F'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data1 = await sequelize.query(
            `
            select count(*) from niñoscinco
            where sexo='M'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );

       
        console.log(data[0]["count(*)"])
        const prueba ={
            'Femeninas':data[0]["count(*)"],
            'Masculino':data1[0]["count(*)"],
            
          
           };

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
                data: prueba
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

  async function getTotales(req) {
    try {
        
       

        const data = await sequelize.query(
            `
            select count(*) from niñoscinco
            where sexo='F'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        console.log(data[0]["count(*)"])
        const prueba ={
            
            'total':data[0]["count(*)"]
          
           };

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
                data: prueba
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
  // Metodo que obtiene totales por meses
  // ************************

  async function getMeses(req) {
    try {
        
       

        const data = await sequelize.query(
            `
            SELECT count(*), 
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 1 THEN 1 ELSE 0 END) AS Ene,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 2 THEN 1 ELSE 0 END) AS Feb,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 3 THEN 1 ELSE 0 END) AS Mar,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 4 THEN 1 ELSE 0 END) AS Abr,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 5 THEN 1 ELSE 0 END) AS May,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 6 THEN 1 ELSE 0 END) AS Jun,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 7 THEN 1 ELSE 0 END) AS Jul,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 8 THEN 1 ELSE 0 END) AS Ago,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 9 THEN 1 ELSE 0 END) AS Sep, 
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 10 THEN 1 ELSE 0 END) AS Oct,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 11 THEN 1 ELSE 0 END) AS Nov,
SUM(CASE WHEN MONTH(niñoscinco.fecha_evaluacion) = 12 THEN 1 ELSE 0 END) AS Dic
FROM niñoscinco
WHERE niñoscinco.fecha_evaluacion BETWEEN '2022-01-01' AND '4038-12-31'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        console.log(data)
        const prueba ={
            
            'total':data
          
           };

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
                data: prueba
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
  // Metodo que obtiene totales por Semanas
  // ************************

  async function getSemanas(req) {
    try {
        
       

        const data = await sequelize.query(
            `
            SELECT count(*), 
SUM(CASE WHEN niñoscinco.fecha_evaluacion  BETWEEN '2022-11-20' and '2022-11-26' THEN 1 ELSE 0 END) AS Noviembre,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2022-12-01' and '2022-12-11' THEN 1 ELSE 0 END) AS Diciembre,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-01-08' and '2023-01-15' THEN 1 ELSE 0 END) AS Enero1,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-01-16' and '2023-01-22'  THEN 1 ELSE 0 END) AS Enero2,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-01-23' and '2023-01-29'  THEN 1 ELSE 0 END) AS Enero3,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-01-30' and '2023-02-05'  THEN 1 ELSE 0 END) AS Semana6,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-02-06' and '2023-02-12'  THEN 1 ELSE 0 END) AS Semana7,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-02-13' and '2023-02-19'  THEN 1 ELSE 0 END) AS Semana8,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-02-20' and '2023-02-26'  THEN 1 ELSE 0 END) AS Semana9,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-02-27' and '2023-03-05'  THEN 1 ELSE 0 END) AS Semana10,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-03-06' and '2023-03-12'  THEN 1 ELSE 0 END) AS Semana11,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-03-13' and '2023-03-19'  THEN 1 ELSE 0 END) AS Semana12,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-03-20' and '2023-03-26'  THEN 1 ELSE 0 END) AS Semana13,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-03-27' and '2023-04-02'  THEN 1 ELSE 0 END) AS Semana14,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-04-03' and '2023-04-09'  THEN 1 ELSE 0 END) AS Semana15,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-04-10' and '2023-04-16'  THEN 1 ELSE 0 END) AS Semana16,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-04-17' and '2023-04-23'  THEN 1 ELSE 0 END) AS Semana17,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-04-24' and '2023-04-30'  THEN 1 ELSE 0 END) AS Semana18,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-05-01' and '2023-05-07'  THEN 1 ELSE 0 END) AS Semana19,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-05-08' and '2023-05-14'  THEN 1 ELSE 0 END) AS Semana20,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-05-15' and '2023-05-21'  THEN 1 ELSE 0 END) AS Semana21,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-05-22' and '2023-01-28'  THEN 1 ELSE 0 END) AS Semana22,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-05-29' and '2023-06-04'  THEN 1 ELSE 0 END) AS Semana23,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-06-05' and '2023-06-11'  THEN 1 ELSE 0 END) AS Semana24,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-06-12' and '2023-06-18'  THEN 1 ELSE 0 END) AS Semana25,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-06-19' and '2023-06-25'  THEN 1 ELSE 0 END) AS Semana26,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-06-26' and '2023-07-02'  THEN 1 ELSE 0 END) AS Semana27,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-07-03' and '2023-07-09'  THEN 1 ELSE 0 END) AS Semana28,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-07-10' and '2023-07-16'  THEN 1 ELSE 0 END) AS Semana29,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-07-17' and '2023-07-23'  THEN 1 ELSE 0 END) AS Semana30,
SUM(CASE WHEN niñoscinco.fecha_evaluacion BETWEEN '2023-07-24' and '2023-07-31'  THEN 1 ELSE 0 END) AS Semana31
FROM niñoscinco
WHERE  niñoscinco.fecha_evaluacion BETWEEN '2022-12-10' AND '2023-01-31'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        console.log(data)
        const prueba ={
            
            'total':data
          
           };

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
                data: prueba
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

  async function getNinas(req) {
    try {
        
        const data = await sequelize.query(
            `
            select count(*) from niñoscinco
            where sexo='F'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data1 = await sequelize.query(
            `
            select count(*) from niñoscinco
          where sexo='F' and discapacidad = "Si"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data2= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='F' and grupo_etnico="Indígena"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data3= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='F' and clasificacion_pb="Adecuado"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data4= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='F' and clasificacion_pb="Riesgo de Desnutrición"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data5= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='F' and clasificacion_pb="Desnutrición aguda moderada"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data6= await sequelize.query(
            `
            select count(*) from niñoscinco
            where sexo='F' and clasificacion_pb="Desnutrición aguda severa"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        



       
        console.log(data[0]["count(*)"])
        const prueba ={
            'Desnutricion aguda moderada':data5[0]["count(*)"],
            //'Niñas':data[0]["count(*)"],
           
            'Vulnerabilidad':data4[0]["count(*)"],
            
            //'Poblacion Indigena':data2[0]["count(*)"],
            'Peso adecuado':data3[0]["count(*)"],
            //'Discapacidad':data1[0]["count(*)"],
            
            'Desnutricion aguda severa':data6[0]["count(*)"],
           };

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
                data: prueba
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

  async function getNinos(req) {
    try {
        
        const data = await sequelize.query(
            `
            select count(*) from niñoscinco
            where sexo='M'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data1 = await sequelize.query(
            `
            select count(*) from niñoscinco
          where sexo='M' and discapacidad = "Si"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data2= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='M' and grupo_etnico="Indígena"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data3= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='M' and clasificacion_pb="Adecuado"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data4= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='M' and clasificacion_pb="Riesgo de Desnutrición"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data5= await sequelize.query(
            `
            select count(*) from niñoscinco
  where sexo='M' and clasificacion_pb="Desnutrición aguda moderada"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data6= await sequelize.query(
            `
            select count(*) from niñoscinco
            where sexo='M' and clasificacion_pb="Desnutrición aguda severa"`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        



       
        console.log(data[0]["count(*)"])
        const prueba ={
            'Desnutricion aguda moderada':data5[0]["count(*)"],
            //'Niñas':data[0]["count(*)"],
           
            'Vulnerabilidad':data4[0]["count(*)"],
            
            //'Poblacion Indigena':data2[0]["count(*)"],
            'Peso adecuado':data3[0]["count(*)"],
            //'Discapacidad':data1[0]["count(*)"],
            
            'Desnutricion aguda severa':data6[0]["count(*)"],
           };

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
                data: prueba
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
async function getBeneficiarios(req) {
//const params = req.body;
try {
        
    const data = await sequelize.query(
        `
        select * from  niñoscinco`,
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
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getMel(req) {
    try {
        
        const data = await sequelize.query(
            `
            select count(*) from mel
            where gestante='si'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        const data1 = await sequelize.query(
            `
            select count(*) from mel
            where gestante='no'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );

       
        console.log(data[0]["count(*)"])
        const prueba ={
            'Gestantes':data[0]["count(*)"],
            'No Gestantes':data1[0]["count(*)"],
            
          
           };

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
                data: prueba
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
async function getTotalNut(req) {
    try {
        
        const data = await sequelize.query(
            `
            select count(*) from niñoscinco
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
      

       
        console.log(data[0]["count(*)"])
        const prueba ={
            'total':data[0]["count(*)"],
           
            
          
           };

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
                data: prueba
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
  getMel,
  getTotales,
  getNinos,
  getNinas,
  getMeses,
  getSemanas,
  getBeneficiarios,
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
  getUltimaFechaPregunta,
  getTotalNut

};