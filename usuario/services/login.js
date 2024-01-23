'use strict';

//const Log = require('../../../helpers/log');
const base_usuarios = require('../../models/Usuario');
// const base_usuarioscuentas = require('../../../models/base_usuarioscuentas');
// const reg_membresias = require('../../../models/reg_membresias');
// const ctl_tiposmembresias = require('../../../models/ctl_tiposmembresias');
const bcrypt = require('bcrypt');
const auth = require('./jwt');
const correo=require("./correo");
const QueryTypes = require('sequelize');
const sequelize = require('../../db/db_sequelize');
// const auth = require('../jwt');
// const correo = require('../correo/correo');

// ************************
// Metodo que inicia sesión
// ************************
// async function login(params) {
// console.log(params)

//     let data;
//     //sconst params = req.body;
//     // const usuario = await base_usuarios.findOne({
//     //     attributes: ['id','nombres','apellidos','rol','password','estado','email','ocupacion'],
//     //     where: {
//     //         email: params.email,
//     //         estado: 1,
//     //     }
//     // });
//     const usuario = await sequelize.query(
//         `
//         select *
//          from usuarios,profesiones WHERE estado = 1 AND email='${params.email}'  and ocupacion = id_pro 
//         `,
//         {
//             replacements: {
               
//             },
//             type: QueryTypes.SELECT
//         }
//     );
//     console.log(usuario[0][0]);
//     let datos =usuario[0][0];
//     if (datos) {
//         try {
            
            
//        let password = params.password;
//     //    checkUser(params.correo,params.password)
    
//     //    async function checkUser(username, password) {
//     //     //... fetch user from a db etc.
    
//     //     const match = await bcrypt.compare(password, password1);
    
//     //     if(match) {
//     //         console.log('si es ')//login
//     //     }
    
//     //     //...
//     // }
//     const match = await bcrypt.compare(password, datos.password);
//             // data = await base_usuarios.create({
//             //     //idusuario: params.idusuario,
               
//             //     email: params.correo,
//             //     password:password,
//             //     rol:params.rol,
//             //     estado: 0,
//             //     //confirmado: 0, // Por default no está confirmado el usuario
//             //     token:null,
//             //     //cUsuario_Registro: 'SA',
//             //      fecha_modificacion: new Date(),
//             //     fecha_creacion: new Date()
//             // });
    
//             if (match != '') {
//                 const token = auth.createToken(usuario.email);

//                 const dataLogin = {
//                     idToken: token,
//                     nombre:datos.nombres,
//                     apellido:datos.apellidos,
//                     usuario: datos.email,
//                     rol: datos.rol,
//                     activo:datos.estado,
//                     ocupacion:datos.descripcion
//                 };
               
//                 return {
//                     status: 200,
//                     error: '',
//                     data:dataLogin,
//                 };
//             } else {
//                 return {
//                     status: 400,
//                     error: 'Error al crear la cuenta',
//                     data,
//                 };
//             }
    
//         } catch (err) {
//             // do something
//             return {
//                 status: 500,
//                 error: err,
//                 data: [],
//             }
//         }
//     } else{
//         return {
//             status: 400,
//             error: 'Usuario no existe',
//             data:'Usuario no existe',
//         };
//     }
   

//     // try {

//     //     const usuario = await base_usuarios.findOne({
//     //         attributes: ['email','rol','password'],
//     //         where: {
//     //             email: params.correo,
//     //             estado: 1
//     //         }
//     //     });

//     //     if (usuario) {

//     //         let username= usuario.email;
//     //         let tipoMembresia = null
//     //         let membresiaVence = null;

//     //         checkUser(username,params.password)

//     //         async function checkUser(username, password) {
//     //          //... fetch user from a db etc.
         
//     //          const match = await bcrypt.compare(password,usuario.password);
         
//     //          if(match) {
//     //              console.log('si es ')//login
//     //              let data ={
//     //                 status: 200,
//     //                 error: '',
//     //                 usuario,
//     //              }
//     //              return {
//     //                 data
                   
//     //             };
//     //          }
//     //          else {
//     //             //Guardamos en el log
//     //             // Log.guardar(
//     //             //     usuario.nIdUsuario,
//     //             //     1,
//     //             //     'Problema en el login del usuario'
//     //             // );
//     //             return {
//     //                 status: 401,
//     //                 error: 'Password invalido ',
//     //                 data,
//     //             };
//     //         }
//     //          //...
//     //      }

            
//     //     } else {
//     //         return {
//     //             status: 400,
//     //             error: 'Correo de usuario no existe',
//     //             data,
//     //         };
//     //     }

//     // } catch (err) {
//     //     // do something
//     //     return {
//     //         status: 500,
//     //         error: err,
//     //         data: [],
//     //     };
//     // }

    
// }
async function login(params) {
    console.log(params)
    
        let data;
        //sconst params = req.body;
        // const usuario = await base_usuarios.findOne({
        //     attributes: ['id','nombres','apellidos','rol','password','estado','email','ocupacion'],
        //     where: {
        //         email: params.email,
        //         estado: 1,
        //     }
        // });
        const usuario = await sequelize.query(
            `
            select *
             from Usuarios WHERE tipo_usuario = 1 AND correo_usuario='${params.email}'  AND contraseña_usuario='${params.password}' 
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );
        console.log(usuario[0][0]);
        let datos =usuario[0][0];
        if (datos) {
            try {
                
                
         //  let password = params.password;
        //    checkUser(params.correo,params.password)
        
        //    async function checkUser(username, password) {
        //     //... fetch user from a db etc.
        
        //     const match = await bcrypt.compare(password, password1);
        
        //     if(match) {
        //         console.log('si es ')//login
        //     }
        
        //     //...
        // }
        //const match = await bcrypt.compare(password, datos.password);
                // data = await base_usuarios.create({
                //     //idusuario: params.idusuario,
                   
                //     email: params.correo,
                //     password:password,
                //     rol:params.rol,
                //     estado: 0,
                //     //confirmado: 0, // Por default no está confirmado el usuario
                //     token:null,
                //     //cUsuario_Registro: 'SA',
                //      fecha_modificacion: new Date(),
                //     fecha_creacion: new Date()
                // });
                return {
                  status: 200,
                  error: '',
                  data:datos,
              };
                // if (match != '') {
                //     const token = auth.createToken(usuario.email);
    
                //     const dataLogin = {
                //         idToken: token,
                //         nombre:datos.nombres,
                //         apellido:datos.apellidos,
                //         usuario: datos.email,
                //         rol: datos.rol,
                //         activo:datos.estado,
                //         ocupacion:datos.descripcion
                //     };
                   
                //     return {
                //         status: 200,
                //         error: '',
                //         data:dataLogin,
                //     };
                // } else {
                //     return {
                //         status: 400,
                //         error: 'Error al crear la cuenta',
                //         data,
                //     };
                // }
        
            } catch (err) {
                // do something
                return {
                    status: 500,
                    error: err,
                    data: [],
                }
            }
        } else{
            return {
                status: 400,
                error: 'Usuario no existe',
                data:'Usuario no existe',
            };
        }
       
    
    
        
    }
  // ************************
  // Metodo que obtiene el tipo de membresia
  // ************************
// async function tipoMembresia(id) {
//     const membresia = await reg_membresias.findOne({
//         attributes: ['nFechaVigencia', 'nTipoMembresia'],
//         where: { nIdUsuario: id, bActivo: 1 },
//     });

//     return {
//         status: 200,
//         error: '',
//         data: {
//             membresia
//         },
//     };
// }
//   // ************************
//   // Metodo que que obtiene el loginDid
//   // ************************
// async function loginDid(params) {


//     var data = [];
//     const fecha = new Date();
//     let nMesMembresia = fecha.getMonth() + 1;
//     let nDiasMembresia = fecha.getDay();
//     let nAnioMembresia = fecha.getFullYear();

//     try {

//         const cuenta = await base_usuarioscuentas.findOne({
//             attributes: ['cDid', 'nIdCuenta', 'nIdUsuario', 'cCorreo', 'cNombre', 'bAdmin', 'cDid', 'bConfirmado'],
//             where: { cDid: params.cDid, nModulo: 4, bActivo: 1 }
//         });

//         if (cuenta) {
//             const usuario = await base_usuarios.findOne({
//                 attributes: ['nIdUsuario', 'nTipo', 'nClasificacion'],
//                 where: {
//                     nIdUsuario: cuenta.nIdUsuario,
//                     bActivo: 1
//                 }
//             });

//             let membresia = null;
//             let tipoMembresia = null
//             let membresiaVence = null;

//             if (usuario) {
//                 membresia = await reg_membresias.findOne({
//                     attributes: ['nFechaVigencia', 'nTipoMembresia'],
//                     where: { nIdUsuario: usuario.nIdUsuario, bActivo: 1 }
//                 });

//                 tipoMembresia = await ctl_tiposmembresias.findOne({
//                     attributes: ['nModulo'],
//                     where: { nTipoMembresia: membresia.nTipoMembresia, bActivo: 1, nModulo: 4 }
//                 });

//                 if (tipoMembresia) {

//                     nAnioMembresia = ('0000' + nAnioMembresia).slice(-4);
//                     nMesMembresia = ('0000' + nMesMembresia).slice(-2);
//                     nDiasMembresia = ('0000' + nDiasMembresia).slice(-2);
//                     // console.log(membresia.nFechaVigencia);
//                     // console.log(nAnioMembresia + nMesMembresia + nDiasMembresia)
//                     if (membresia === null || membresia.length < 1) {
//                         tipoMembresia = 0;

//                         //Guardamos en el log
//     /*                    return {
//                             status: 400,
//                             error: 'El usuario no tiene membresia activa',
//                             data,
//                         };*/
//                     } else {
//                         tipoMembresia = membresia.nTipoMembresia;
//                     }
//                     if (membresia.nFechaVigencia < parseInt((nAnioMembresia + nMesMembresia + nDiasMembresia))) {
//                         membresiaVence = 0;
//     /*                    return {
//                             status: 401,
//                             error: 'La membresia del usuario expiro',
//                             data,
//                         };*/
//                     } else { membresiaVence = 1; }
//                     const token = auth.createToken(cuenta.cDid);
//                     return {
//                         status: 200,
//                         error: '',
//                         data: {
//                             idToken: token,
//                             nCuenta: cuenta.nIdCuenta,
//                             nIdUsuario: usuario.nIdUsuario,
//                             nTipo: usuario.nTipo,
//                             nClasificacion: usuario.nClasificacion,
//                             nTipoMembresia: membresia.nTipoMembresia,
//                             bMembresiaVence: membresiaVence,
//                             bAdmin: cuenta.bAdmin,
//                             bConfirmado: (cuenta.cDid !== '0' && cuenta.cDid !== '' && cuenta.cDid !== null) ? 1 : 0
//                         },
//                     };
//                 } else {
//                     //Guardamos en el log
//                     // Log.guardar(
//                     //     usuario.nIdUsuario,
//                     //     1,
//                     //     'Problema en el login del usuario'
//                     // );
//                     return {
//                         status: 402,
//                         error: 'Usuario no pertenece a Marketplace ',
//                         data,
//                     };
//                 }
//             } else {
//                 //Guardamos en el log
//                 // Log.guardar(
//                 //     usuario.nIdUsuario,
//                 //     1,
//                 //     'Problema en el login del usuario'
//                 // );
//                 return {
//                     status: 400,
//                     error: 'El usuario no existe',
//                     data,
//                 };
//             }
//         } else {
//             const usuario = await base_usuarios.findOne({
//                 attributes: ['cDid', 'nIdUsuario', 'nTipo', 'nClasificacion', 'cPassword'],
//                 where: {
//                     cUsuario: params.cEmail,
//                     bActivo: 1
//                 }
//             });
    
//             if (usuario) {
    
//                 let membresia = null;
//                 let tipoMembresia = null
//                 let membresiaVence = null;
    
//                 membresia = await reg_membresias.findOne({
//                     attributes: ['nFechaVigencia', 'nTipoMembresia'],
//                     where: { nIdUsuario: usuario.nIdUsuario, bActivo: 1 }
//                 });

//                 tipoMembresia = await ctl_tiposmembresias.findOne({
//                     attributes: ['nModulo'],
//                     where: { nTipoMembresia: membresia.nTipoMembresia, bActivo: 1, nModulo: 4 }
//                 });

//                 if (tipoMembresia) {
//                     nAnioMembresia = ('0000' + nAnioMembresia).slice(-4);
//                     nMesMembresia = ('0000' + nMesMembresia).slice(-2);
//                     nDiasMembresia = ('0000' + nDiasMembresia).slice(-2);
//                     // console.log(membresia.nFechaVigencia);
//                     // console.log(nAnioMembresia + nMesMembresia + nDiasMembresia)
//                     if (membresia === null || membresia.length < 1) {
//                         tipoMembresia = 0;

//                         //Guardamos en el log
//     /*                    return {
//                             status: 400,
//                             error: 'El usuario no tiene membresia activa',
//                             data,
//                         };*/
//                     } else {
//                         tipoMembresia = membresia.nTipoMembresia;
//                     }
//                     if (membresia.nFechaVigencia < parseInt((nAnioMembresia + nMesMembresia + nDiasMembresia))) {
//                         membresiaVence = 0;
//     /*                    return {
//                             status: 401,
//                             error: 'La membresia del usuario expiro',
//                             data,
//                         };*/
//                     } else {
//                         membresiaVence = 1;
//                     }

//                     const token = auth.createToken(usuario.cDid);
//                     const dataLogin = {
//                         idToken: token,
//                         nIdUsuario: usuario.nIdUsuario,
//                         nTipo: usuario.nTipo,
//                         nCuenta: null,
//                         nClasificacion: usuario.nClasificacion,
//                         nTipoMembresia: tipoMembresia,
//                         bMembresiaVence: membresiaVence,
//                         bAdmin: 1,
//                         bConfirmado: (usuario.cDid !== '0' && usuario.cDid !== '' && usuario.cDid !== null) ? 1 : 0
//                     };

//                     return {
//                         status: 200,
//                         error: '',
//                         data: dataLogin,
//                     };
//                 } else {
//                     //Guardamos en el log
//                     // Log.guardar(
//                     //     usuario.nIdUsuario,
//                     //     1,
//                     //     'Problema en el login del usuario'
//                     // );
//                     return {
//                         status: 402,
//                         error: 'Usuario no pertenece a Marketplace ',
//                         data,
//                     };
//                 }
//             } else {
//                 //Guardamos en el log
//                 // Log.guardar(
//                 //     usuario.nIdUsuario,
//                 //     1,
//                 //     'Problema en el login del usuario'
//                 // );
//                 return {
//                     status: 400,
//                     error: 'El usuario no existe',
//                     data,
//                 };
//             }
//         }

//     } catch (err) {
//         // do something
//         return {
//             status: 500,
//             error: err,
//             data: [],
//         };
//     }
// }
//   // ************************
//   // Metodo que envia correo
//   // ************************
// async function enviarCorreo(params) {
//     try {
//         const res = await correo.enviar(params, 2, 'RECUPERAR_CONTRASENA');
//         if (res === null || res.length < 1) {
//             return {
//                 status: 404,
//                 error: 'El correo no existe',
//                 data: res,
//             };
//         } else {
//             return {
//                 status: 200,
//                 error: '',
//                 data: res
//             };
//         }
//     }
//     catch (err) {
//         return {
//             status: 500,
//             error: 'Error de conexion al servidor',
//             data: err
//         }
//     }
// }
//   // ************************
//   // Metodo que restablece la contraseña
//   // ************************
// async function reestablecerContrasena(params) {
//     try {

//         // verificar que tenemos un token y que las contraseñas enviadas son iguales
//         if (params.cToken.length > 0 && params.cPassword1 === params.cPassword2) {
//             const usuario = await base_usuarios.findOne({
//                 attributes: ['cDid', 'nIdUsuario', 'nTipo'],
//                 where: { cToken: params.cToken, cPassword: params.cPassword2, bActivo: 1 },
//             });

//             if (usuario) {
//                 return {
//                     status: 400,
//                     error: 'Error: Tu contraseña debe ser distinta a la anterior',
//                     data
//                 }
//             } else {
//                 const data = await base_usuarios.update({
//                     cPassword: params.cPassword1, // actualizamos la contraseña
//                     cToken: null // reseteamos el token
//                 }, { where: { cToken: params.cToken, bActivo: 1 } });

//                 if (data) {
//                     return {
//                         status: 200,
//                         error: '',
//                         data
//                     };
//                 } else {
//                     return {
//                         status: 400,
//                         error: 'Error al actualizar la contraseña',
//                         data
//                     }
//                 }
//             }
//         } else {
//             return {
//                 status: 400,
//                 error: 'Error al actualizar la contraseña',
//                 data: ['error'],
//             }
//         }
//     }
//     catch (err) {
//         return {
//             status: 500,
//             error: 'Error al actualizar la contraseña',
//             data: err
//         }
//     }
// }

module.exports = {
    login,
    // loginDid,
    // enviarCorreo,
    // reestablecerContrasena,
    // tipoMembresia
};