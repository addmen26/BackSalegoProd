'use strict';
const base_convocatoria = require('../../models/convocatoria');
const base_voluntariosConvocatoria = require('../../models/voluntariosConvocatoria');
const correo = require('../../usuario/services/correo');
const sequelize = require('../../db/db_sequelize');
const {QueryTypes} = require('sequelize');
const mysql = require('../../db/db_mysql');

// const reg_preguntaspublicacionesportal = require('../../models/reg_preguntaspublicacionesportal');
// const reg_preguntasportal = require('../../models/reg_preguntasportal');

 // ************************
  // Metodo que obtiene preguntas ha publicar
  // ************************

  async function getConvocatoria(req) {
    try {
        
        const data = await sequelize.query(
            `
            SELECT convocatoria.*,JSON_EXTRACT(cantidadVoluntarios, '$[*].roles') AS bases, proyectos.nombre
            FROM convocatoria
            INNER JOIN proyectos ON convocatoria.idProyecto = proyectos.idproyectos

            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
     
    //console.log(data[0].actividad.slice(1,data[0].actividad.length - 1))
    let data3=data;
 let data2=JSON.parse(data[0].actividad)
        console.log(data2[0])
      for (let i=0;i< data3.length  ; i++){
        let data2=JSON.parse(data[i].actividad)
        data3[i].actividad=data2
        
     }
       console.log(data3)
// console.log
        if (data.length === 0) {
            return {
                status: 400,
                error: 'No hay preguntas convacatoria.',
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

  async function crearConvocatoria(req) {
console.log(req.body);
    let data;
    const params = req.body;
    //const users = [params.coordinador,params.coordinador_ms,params.coordinador_cs,params.coordinador_logistica];
    //console.log(users.length);
       try {
  
   
          
         
   
           data = await base_convocatoria.create({
            //idConvocatoria: params.idConvocatoria,
            idProyecto: params.idProyecto,
            actividad: params.actividad,
            locacion: params.locacion,
            fecha: params.fecha,
            puntoEncuentro: params.puntoEncuentro,
            duracion: params.duracion,
            horaEncuentro:params.horaEncuentro,
            horaSalida:params.horaSalida,
            horaRetorno:params.horaRetorno,
            cantidadVoluntarios:params.cantidadVoluntarios,
            equipos:params.equipos,
            logistica:params.logistica,
            comentarios:params.comentarios,
            insumos:params.insumos,
            estado:params.estado,
             fecha_registro :new Date(),
             fecha_modificacion:new Date()
           });

           console.log(params.equiposQuery)
           let correos = {
            idProyecto: params.idProyecto,
            actividad: params.actividad,
            locacion: params.locacion,
            fecha: params.fecha,
            puntoEncuentro: params.puntoEncuentro,
            duracion: params.duracion,
            horaEncuentro:params.horaEncuentro,
            horaSalida:params.horaSalida,
            horaRetorno:params.horaRetorno,
            equipos:params.equiposQuery,
            profesiones:params.profesionesQuery
           }
           enviarCorreo(correos);
           
           
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

   
   async function putProyectos(codigo,params) {
    //const params = req.body;
    console.log(codigo);
    try {
        const data = await base_proyectos.update({
           nombre: params.nombre,
           descripcion: params.descripcion,
           //dFecha_UltimaModificacion: new Date(),
        }, { where: { codigo: params.codigo, estado:1  } });

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



  
//   const tableee= await sequelize.query(
//     `
//     select * from proyectos
//     where estado=1`,
//     {
//         replacements: {
           
//         },
//         type: QueryTypes.SELECT
//     }
// );
// console.log( tableee);
/////Crear Tablao
async function crearTablas(req) {
var cadena='';
    for (var key in req.body) {
        cadena=`${req.body[key]} varchar(255)not null,` + cadena
       
     }
     cadena=cadena.substring(0, cadena.length - 1);


    console.log(cadena);
    const opciones =[
    {
dato: 'prueba', tipo:0
    },
    {
        dato: 'prueba1', tipo:1
            },
            {
                dato: 'prueba2', tipo:0
                    },
                    {
                        dato: 'prueba3', tipo:1
                            },
            
]
var val='';
var name='';
var str='';
var tipo ='';
console.log(opciones)
for(let i=0;i <opciones.length; i++){
    
    for (var key in opciones[i]) {
       
//         if(key != 'dato'){
// if(opciones[i][key] === 0){
// tipo=` varchar(255)not null,`+tipo; 
// }else{
// tipo= ` dateqq, `+tipo;
// }

//         }else{
//             str=`${opciones[i][key]}`+tipo+`${str}`;
            
//         }
if(key == 'dato'){
name=opciones[i][key];
}
if(key == 'tipo'){

    if(opciones[i][key] === 0){
         tipo=` varchar(255)not null,`; 
         }else{
         tipo= ` DATE NULL, `
         }
}


     }
     str=name+tipo
   val=str+val
   
}
console.log(val);   
val=val.substring(0, val.length - 1);
    
    try {
        let createTodos = `create table if not exists todos(
            id int primary key auto_increment,
           
            ${val}
        )`;
        console.log(createTodos)
var data 
       // connect to the MySQL server
     mysql.query(createTodos, function(err, results, fields) {
      if (err) {
        console.log(err.message);
      }else{
data = results;
      }
    });
  
    
  
  


        // const data = mysql.query(createTodos, function(err, results, fields) {
        //     if (err) {
        //     console.log(err.message);
        //     }
        //     });
        

       

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
  // Metodo que inserta las preguntas para luego publicarlas
  // *

  async function crearProyectoUsuarios(param,user) {

    let data;
    const params = param;
    const users = user;
    console.log(params);
    console.log(users);
  
       try {
            console.log('paso')
             data = await proyectos_usuarios.create({
                id_proyecto: params,
                id_usuario:users,
                estado: 1,
                fecha_registro :new Date(),
                fecha_modificacion:new Date()
                //dFecha_UltimaModificacion: new Date(),
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
   async function enviarCorreo(params) {
    console.log(params,"se Ejecuto")

     try {
         const res = await correo.convocatoria(params);
         if (res === null || res.length < 1) {
             return {
                 status: 404,
                 error: 'El correo no existe',
                 data: res,
             };
         } else {
             return {
                 status: 200,
                 error: '',
                 data: res
             };
         }
     }
     catch (err) {
         return {
             status: 500,
             error: 'Error de conexion al servidor',
             data: err
         }
     }
 }
   // ************************
  // Metodo que elimina las preguntas para luego seran publicarlas
  // *
  async function aceptarConvocatoria(req) {
    const params = req.body;
    var espera=0;
    console.log(params)
    const voluntario = await base_voluntariosConvocatoria.findOne({
        attributes: ['estados'],
        where: {
            email: params.email,
            idConvocatoria:params.id,
        }
    });
    if (!voluntario) {
    try {
    
        const data = await sequelize.query(
            `
            SELECT cantidadVoluntarios FROM convocatoria
            where id=${params.id}`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        let cantidad=JSON.parse(data[0].cantidadVoluntarios);

for (let i=0;i< cantidad.length  ; i++){
   console.log(params.profesion,Number(cantidad[i].cantidad),cantidad[i].roles,"prueba conteo" )
    if(cantidad[i].roles == params.profesion ){
        if(Number(cantidad[i].cantidad) >0){
            console.log('paso')
            cantidad[i].cantidad=cantidad[i].cantidad-1
        }else{espera=1}
      
    }
   
  }
 
 var elegidas ={};
 if(espera != 0){
     elegidas={
        convocatoria:params.id,
        aceptada:0,
        espera:1,
        rechazada:0,
        cancelada:0
     };
     let convocatoriasuser = new Array(elegidas);
     convocatoriasuser=JSON.stringify(convocatoriasuser)
     console.log(convocatoriasuser);
     const data3 = await base_voluntariosConvocatoria.create({
        idConvocatoria:params.id,
         email: params.email,
         estados:3,
         convocatorias:convocatoriasuser,
          fecha_creacion:new Date(),
          fecha_modificacion:new Date()
       });
       console.log(data3);
 
 }else{
     elegidas={
        convocatoria:params.id,
        aceptada:1,
        espera:0,
        rechazada:0,
        cancelada:0
     };
     console.log(cantidad);
     const data1 = await base_convocatoria.update({
           
       cantidadVoluntarios: JSON.stringify(cantidad)
       ,
       //dFecha_UltimaModificacion: new Date(),
    }, { where: { id: params.id } });
     let convocatoriasuser = new Array(elegidas);
     convocatoriasuser=JSON.stringify(convocatoriasuser)
     console.log(convocatoriasuser);
     const data2 = await base_voluntariosConvocatoria.create({
        idConvocatoria:params.id,
         email: params.email,
         estados:1,
         convocatorias:convocatoriasuser,
          fecha_creacion:new Date(),
          fecha_modificacion:new Date()
       });
       console.log(data2);
 }
 


        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'No se Pudo asignar',
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
} else{
    return {
        status: 400,
        error: 'Ya acepto la convocatoria',
        data:'Ya acepto la convocatoria',
    };
}
}
async function crearEquipos(req) {

    let data;
    const params = req.body;
    console.log(req.body);
   
       try {   
           data = await base_equipos.create({
             nombre :params.nombre,
             descripcion:params.descripcion,
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
   
   
async function rechazarConvocatoria(req) {
    const params = req.body;
   
    console.log(params)
    const voluntario = await base_voluntariosConvocatoria.findOne({
        attributes: ['estados'],
        where: {
            email: params.email,
            idConvocatoria:params.id,
        }
    });
    if (!voluntario) {
    try {
    
        


 var elegidas ={  
    convocatoria:params.id,
    aceptada:0,
    espera:0,
    rechazada:1,
    cancelada:0};

 
let convocatoriasuser = new Array(elegidas);
 convocatoriasuser=JSON.stringify(convocatoriasuser)
 console.log(convocatoriasuser);
 const data= await base_voluntariosConvocatoria.create({
    idConvocatoria:params.id,
     email: params.email,
     estados:2,
     convocatorias:convocatoriasuser,
      fecha_creacion:new Date(),
      fecha_modificacion:new Date()
   });
   console.log(data);

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'No se Pudo asignar',
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
}else{
        return {
            status: 400,
            error: 'Ya rechazo la convocatoria',
            data:'Ya rechazo la convocatoria',
        };
    }
}

async function cancelarConvocatoria(req) {
    const params = req.body;
    var espera=0;
    console.log(params)
    try {
    
        const data = await sequelize.query(
            `
            SELECT cantidadVoluntarios FROM convocatoria
            where id=${params.id}`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        let cantidad=JSON.parse(data[0].cantidadVoluntarios);

for (let i=0;i< cantidad.length  ; i++){
   
    if(cantidad[i].roles == params.profesion){
        console.log('paso')
cantidad[i].cantidad=Number(cantidad[i].cantidad)+1
    }else{
      espera=1
    }
   
  }
  console.log(cantidad);
  const data1 = await base_convocatoria.update({
        
    cantidadVoluntarios: JSON.stringify(cantidad)
    ,
    //dFecha_UltimaModificacion: new Date(),
 }, { where: { id: params.id } });
 

  const data3 = await base_voluntariosConvocatoria.update({
        
    estados:4
    ,
    //dFecha_UltimaModificacion: new Date(),
 }, { where: { idConvocatoria: params.id, email:params.email } });
 
 const data4 = await sequelize.query(
    `
    SELECT * FROM voluntariosconvocatoria
    where idConvocatoria=${params.id} and estados=3 LIMIT 1
    `,
    {
        replacements: {
           
        },
        type: QueryTypes.SELECT
    }
); 
console.log(data4) 

const data5 = await base_voluntariosConvocatoria.update({
        
    estados:1
    ,
    //dFecha_UltimaModificacion: new Date(),
 }, { where: { idConvocatoria: data4[0].idConvocatoria, email:data4[0].email } });
 const data6 = await sequelize.query(
    `
    SELECT cantidadVoluntarios FROM convocatoria
    where id=${params.id}`,
    {
        replacements: {
           
        },
        type: QueryTypes.SELECT
    }
);
let cantidad1=JSON.parse(data6[0].cantidadVoluntarios);

for (let i=0;i< cantidad1.length  ; i++){

if(cantidad1[i].roles == params.profesion){
console.log('paso')
cantidad1[i].cantidad=Number(cantidad1[i].cantidad)-1
}else{
espera=1
}

}
console.log(cantidad);
const data7= await base_convocatoria.update({

cantidadVoluntarios: JSON.stringify(cantidad1)
,
//dFecha_UltimaModificacion: new Date(),
}, { where: { id: params.id } });

 
        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'No se Pudo asignar',
                data,
            };
        } else {
           
            return {
                status: 200,
                error: '',
                data,
            };
        }

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'No se Pudo asignar',
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

async function getEspera(req) {
    console.log(req.query.id)
    let params=req.query.id
    try {
        
        const data = await sequelize.query(
            `
           
            SELECT usuarios.*, voluntariosconvocatoria.*,profesiones.descripcion
            FROM voluntariosconvocatoria
            INNER JOIN usuarios ON usuarios.email = voluntariosconvocatoria.email
            INNER JOIN profesiones ON usuarios.ocupacion = profesiones.id_pro
where voluntariosconvocatoria.estados=3 and voluntariosconvocatoria.idConvocatoria=${params}
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 200,
                error: 'No hay preguntas convacatoria.',
                data:[],
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
async function getCancelados(req) {
    console.log(req.query.id)
    let params=req.query.id
    try {
        
        const data = await sequelize.query(
            `
           
            SELECT usuarios.*, voluntariosconvocatoria.*,profesiones.descripcion
            FROM voluntariosconvocatoria
            INNER JOIN usuarios ON usuarios.email = voluntariosconvocatoria.email
            INNER JOIN profesiones ON usuarios.ocupacion = profesiones.id_pro
            where voluntariosconvocatoria.estados=4 and voluntariosconvocatoria.idConvocatoria=${params}
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 200,
                error: 'No hay canceladas',
                data:[],
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
async function getAceptada(req) {
    console.log(req.query.id)
    let params=req.query.id
    try {
        
        const data = await sequelize.query(
            `

SELECT usuarios.*, voluntariosconvocatoria.*,profesiones.descripcion,convocatoria.*,proyectos.nombre,
CASE
    
WHEN asistencia = 5 THEN "Asistente"
WHEN asistencia  = 6 THEN "Retrasado"
WHEN asistencia  =  7 THEN "Inasistente"

END AS asistencias

FROM voluntariosconvocatoria
INNER JOIN usuarios ON usuarios.email = voluntariosconvocatoria.email
INNER JOIN profesiones ON usuarios.ocupacion = profesiones.id_pro
INNER JOIN convocatoria ON convocatoria.id = ${params}
INNER JOIN proyectos ON proyectos.idproyectos = convocatoria.idProyecto
where voluntariosconvocatoria.estados=1 and voluntariosconvocatoria.idConvocatoria=${params}
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 200,
                error: 'No hay preguntas convacatoria.',
                data:[],
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
async function getRechazada(req) {
    console.log(req.query.id)
    let params=req.query.id
    try {
        
        const data = await sequelize.query(
            `
           
            SELECT usuarios.*, voluntariosconvocatoria.*,profesiones.descripcion
            FROM voluntariosconvocatoria
            INNER JOIN usuarios ON usuarios.email = voluntariosconvocatoria.email
            INNER JOIN profesiones ON usuarios.ocupacion = profesiones.id_pro
            where voluntariosconvocatoria.estados=2 and voluntariosconvocatoria.idConvocatoria=${params}
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       

        if (data.length === 0) {
            return {
                status: 200,
                error: 'No hay preguntas convacatoria.',
                data:[],
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
async function getPropias(req) {
    console.log(req.query)
    let params=req.query.email
    try {
        
        const data = await sequelize.query(
            `
            SELECT  voluntariosconvocatoria.*,convocatoria.*,JSON_EXTRACT(convocatoria.cantidadVoluntarios, '$[*].roles') AS bases, proyectos.nombre
            FROM voluntariosconvocatoria
            INNER JOIN convocatoria ON convocatoria.id = voluntariosconvocatoria.idConvocatoria
            INNER JOIN proyectos ON convocatoria.idProyecto = proyectos.idproyectos
            where voluntariosconvocatoria.email = '${params}'`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        

       console.log(data);

        if (data.length === 0) {
            return {
                status: 200,
                error: 'No hay preguntas convacatoria.',
                data:[],
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

async function asistenciaAsignar(req) {
    const params = req.body;
   
    console.log(params)
    try {
    
        

        const data = await base_voluntariosConvocatoria.update({
            asistencia:params.asistencia,
            fecha_modificacion:new Date()
            ,
            //dFecha_UltimaModificacion: new Date(),
         }, { where: { idConvocatoria: params.id,email:params.email } });


 


   console.log(data);

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'No se Pudo asignar',
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

async function updateConvocatoria(req) {
    console.log(req.body);
        let data;
        const params = req.body;
        //const users = [params.coordinador,params.coordinador_ms,params.coordinador_cs,params.coordinador_logistica];
        //console.log(users.length);
           try {
      
       
              
             
       
               data = await base_convocatoria.update({
                //idConvocatoria: params.idConvocatoria,
                idProyecto: params.idProyecto,
                actividad: params.actividad,
                locacion: params.locacion,
                fecha: params.fecha,
                puntoEncuentro: params.puntoEncuentro,
                duracion: params.duracion,
                horaEncuentro:params.horaEncuentro,
                horaSalida:params.horaSalida,
                horaRetorno:params.horaRetorno,
                cantidadVoluntarios:params.cantidadVoluntarios,
                equipos:params.equipos,
                logistica:params.logistica,
                comentarios:params.comentarios,
                insumos:params.insumos,
                estado:params.estado,
                 fecha_modificacion:new Date()
               }, { where: { id: params.id } });
    
              
             
            
               
               
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


       async function getConvProyecto(req) {
        console.log(req.query)
        let params=req.query.id
        try {
            
            const data = await sequelize.query(
                `
                SELECT  *
                FROM convocatoria
                where convocatoria.idProyecto = ${params}
                `,
                {
                    replacements: {
                       
                    },
                    type: QueryTypes.SELECT
                }
            );
            
    
           console.log(data);
    
            if (data.length === 0) {
                return {
                    status: 200,
                    error: 'No hay preguntas convacatoria.',
                    data:[],
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

  getConvocatoria,
  crearConvocatoria,
  aceptarConvocatoria,
  rechazarConvocatoria,
  cancelarConvocatoria,
  getAceptada,
  getCancelados,
  getEspera,
  getRechazada,
  getPropias,
  asistenciaAsignar,
  updateConvocatoria,
  getConvProyecto
 // putProyectos,
  //crearTablas,
  //eliminarPreguntasPublicadas,
  //activarPreguntasPublicadas,
  //publicarPreguntas,
  

};
