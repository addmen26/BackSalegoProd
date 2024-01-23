'use strict'

//const Log = require('../../helpers/log');
//const query = require('../../helpers/query');

const base_usuarios = require('../../models/Usuario');
const base_roles = require('../../models/roles');
const base_tipo = require('../../models/tipo');
const bcrypt = require('bcrypt');
const QueryTypes = require('sequelize');
const sequelize = require('../../db/db_sequelize');
const correo = require('../services/correo');

// Crear Usuario
async function crearUsuario(req) {

    let data;
    const params = req.body;
    const usuario = await base_usuarios.findOne({
        attributes: ['rol'],
        where: {
            email: params.correo,
            
        }
    });
    console.log(usuario);
    if (!usuario) {
        try {
            
            const salt = await bcrypt.genSalt(10);
           const pass= params.password
       let password = await bcrypt.hash(pass, salt);
    //    checkUser(params.correo,params.password)
    
    //    async function checkUser(username, password) {
    //     //... fetch user from a db etc.
    
    //     const match = await bcrypt.compare(password, password1);
    
    //     if(match) {
    //         console.log('si es ')//login
    //     }
    
    //     //...
    // }
    
            data = await base_usuarios.create({
                //idusuario: params.idusuario,
               
                email: params.correo,
                password:password,
                rol:params.rol,
                estado: 0,
                //confirmado: 0, // Por default no está confirmado el usuario
                token:null,
                //cUsuario_Registro: 'SA',
                 fecha_modificacion: new Date(),
                fecha_creacion: new Date()
            });
    
            if (data != '') {
            
    
                return {
                    status: 200,
                    error: '',
                    data,
                };
            } else {
                return {
                    status: 400,
                    error: 'Error al crear la cuenta',
                    data,
                };
            }
    
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
            error: 'Usuario ya existe',
            data:'Usuario ya existe',
        };
    }
    

    
}

// Obtener datos de usuario invitado o administrador
async function getUsuario(req) {

    try {

        const nIdUsuario = parseInt(req.params.nIdUsuario);

        const data = await base_usuarios.findOne({
            where: { nIdUsuario: nIdUsuario, bActivo: 1 }
        });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'La cuenta de usuario no existe',
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
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Obtener datos de usuario invitado o administrador
async function getUsuarioCuenta(req) {

    try {

        const nIdCuenta = parseInt(req.params.nIdCuenta);

        const data = await base_usuarioscuentas.findOne({
            where: { nIdCuenta: nIdCuenta, nModulo: 4, bActivo: 1 }
        });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'La cuenta de usuario no existe',
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
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}


// Obtener datos del correo de cuenta de usuario
async function getCorreoUsuario(req) {

    try {
        const data = await base_usuarioscuentas.findOne({
            where: { nIdUsuario: req.params.nIdUsuario, cCorreo: req.params.cCorreo, nModulo: 4, bActivo: 1 },
        });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'La cuenta de usuario no existe',
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
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Actualiza la imagen del perfil del usuario
async function updateUsuario(req) {
    const params = req.body;
    console.log(params)
    try {
    
        const data = await base_usuarios.update({
            rol: params.rol,
            tipo: params.tipo,
            estado: params.estado,
            fecha_modificacion: new Date()
        }, { where: { email: params.correo} });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'La cuenta de usuario no existe',
                data,
            };
        } else {
            let datos ={
                email : params.correo,
                nombre: params.nombres,
                token: params.token
             }
         console.log(datos)
             enviarCorreo(datos);
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
// Actualiza la imagen del perfil del usuario
async function updateContraseña(req) {
    const params = req.body;
    console.log(params)
    const salt = await bcrypt.genSalt(10);
    const pass= params.password
let password = await bcrypt.hash(pass, salt);
    try {
    
        const data = await base_usuarios.update({
            password: password,
            token:null,
            fecha_modificacion: new Date()
        }, { where: { token: params.token} });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'Token Incorrecto',
                data,
            };
        } else {
        //    corrco se cambio clave let datos ={
        //         email : params.correo,
        //         nombre: params.nombres,
             
        //      }
        //  console.log(datos)
        //      enviarCorreo(datos);
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

async function deleteUsuario(req) {
    const params = req.body;
    try {
        const data = await base_usuarioscuentas.update({
            bActivo: 0,
            dFecha_UltimaModificacion: new Date()
        }, { where: { nIdCuenta: params.nIdCuenta, bActivo: 1 } });

        if (data === null || data.length === 0) {
            return {
                status: 404,
                error: 'La cuenta de usuario no existe',
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

async function getUsuariosAll(req) {

    try {
        const data = await base_usuarioscuentas.findAll({
            where: { nIdUsuario: req.params.nIdUsuario, nModulo: 4, bActivo: 1 }
        });

        return {
            status: 200,
            error: '',
            data,
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Marcar como confirmado el usuario en blockchain
async function confirmarUsuarioBC(req) {
    const params = req.body;
    try {
        const data = await base_usuarioscuentas.update({
            bConfirmado: true,
            cDid: params.cDid,
            cToken: null,
            dFecha_UltimaModificacion: new Date()
        }, { where: { nIdCuenta: params.nIdCuenta, bActivo: 1 } });

        if (data === null || data.length === 0) {
            return {
                status: 404,
                error: 'La cuenta de usuario no existe',
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

async function getUsuarioCuentaToken(req) {

    try {
        const data = await base_usuarioscuentas.findOne({
            where: { cToken: req.params.token, bModulo: 4, bActivo: 1 }
        });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'La cuenta de usuario no existe',
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

async function getTokenUsuario(req) {

    try {
        const data = await base_usuarios.findOne({
            attributes: [
                'cToken'
            ],
            where: { nIdUsuario: req.params.nIdUsuario, bActivo: 1 },
        });

        if (data === null || data.length < 1) {
            return {
                status: 400,
                error: 'La cuenta de usuario no existe',
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

async function getUsuarioDID(req) {

    try {
        const data = await base_usuarioscuentas.findOne({
            where: { cDid: req.params.did, bActivo: 1 }
        });

        if (data === null || data.length === 0) {
            return {
                status: 404,
                error: 'La cuenta de usuario no existe',
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

// Actualizar id
async function updateDID(idCuenta, id, did) {
    try {
        const data = await base_usuarioscuentas.update({
            cDid: did,
        }, { where: { nIdCuenta: idCuenta, nIdUsuario: id } });


        return {
            status: 200,
            error: '',
            data: data
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Se obtienen los datos completos del usuario
async function getUsuarioCompleto(req) {
    let data;
    try {

        data = await sequelize.query(
            `
            select
                IFNULL(U.nClasificacion, 1) as nTipoUsuario,
                U.cEmpresa as cNombreEmpresa,
                U.nTipoEmpresa as nTipoEmpresa,
                U.cRegistroIdentificador as cRFC,
                U.cEmail as cEmail,
                IFNULL(UA.nPaisSucursalMatriz, '') as nPais,
                IFNULL(UA.cCPSucursalMatriz, '') as cCP,
                IFNULL(UA.nIDFormaPagoPreferido, 0) as metodoPago,
                IFNULL(UA.cNombreRepresentanteEmpresa, '') as cNombreRepresentante,
                IFNULL(UA.cApellidoRepresentanteEmpresa, '') as cApellidoRepresentante,
                IFNULL(UA.cCargoRepresentanteEmpresa, '') as cCargoRepresentante,
                IFNULL(UA.cEstadoSucursalMatriz, '') as cEstado,
                IFNULL(UA.cMunicipioSucursalMatriz, '') as cMunicipio,
                IFNULL(UA.cCiudadSucursalMatriz, '') as cCiudad,
                IFNULL(UA.cDireccionSucursalMatriz, '') as cDireccion,
                IFNULL(UA.cDescripcionEmpresa, '') as cDescripcionEmpresa,
                IFNULL(CONVERT(UAA.aArchivo USING utf8), NULL) AS aLogoEmpresa,
                IFNULL(UAC.cNombreArchivo, '') AS cComprobante,
                IFNULL(UAP.cNombreArchivo, '') AS cPrueba
            from base_usuarios as U
            left join base_usuariosanexos as UA on (UA.nIdUsuario=U.nIdUsuario AND UA.bActivo=1)
            left join base_usuariosarchivosanexos as UAA on (UAA.nIdUsuario=U.nIdUsuario AND UAA.nTipo=2 AND UAA.bActivo=1)
            left join base_usuariosarchivosanexos as UAC on (UAC.nIdUsuario=U.nIdUsuario AND UAC.nTipo=3 AND UAC.bActivo=1)
            left join base_usuariosarchivosanexos as UAP on (UAP.nIdUsuario=U.nIdUsuario AND UAP.nTipo=4 AND UAP.bActivo=1)
            where U.nIdUsuario=:nIdUsuario AND U.bActivo=1
            `,
            {
                replacements: { nIdUsuario: req.params.nIdUsuario },
                type: QueryTypes.SELECT
            }
        );

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'El usuario no existe',
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

// Obtener datos de usuario
async function getImagenUsuario(req) {
    let data;
    try {

        if (req.params.idCuenta === 'null') {

            data = await sequelize.query(
                `
                select
                    U.cEmpresa as nombreUsuario,
                    IFNULL(CONVERT(UA.aArchivo USING utf8), NULL) AS aImagenUsuario
                from base_usuarios as U
                left join base_usuariosarchivosanexos as UA on UA.nIdUsuario = U.nIdUsuario and UA.bActivo = 1
                    and UA.nTipo=5
                where U.nIdUsuario=:nIdUsuario AND U.bActivo=1
                `,
                {
                    replacements: { nIdUsuario: req.params.nIdUsuario },
                    type: QueryTypes.SELECT
                }
            );
        } else {
            data = await sequelize.query(
                `
                select
                    cNombre as nombreUsuario,
                    IFNULL(CONVERT(aImagen USING utf8), NULL) AS aImagenUsuario
                from base_usuarioscuentas
                where nIdUsuario=:nIdUsuario AND nIdCuenta=:nIdCuenta AND bActivo=1
                `,
                {
                    replacements: {
                        nIdUsuario: req.params.nIdUsuario,
                        nIdCuenta: req.params.nIdCuenta
                    },
                    type: QueryTypes.SELECT
                }
            );
        }

        return {
            status: 200,
            error: '',
            data: data[0],
        };
    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Obtener datos de usuario
async function getLogoMarcaComercial(req) {
    let data;
    try {

        data = await sequelize.query(
            `
            select
                U.cEmail as cUsuario,
                IFNULL(CONVERT(UAA.aArchivo USING utf8), NULL) AS aLogoEmpresa
            from base_usuariosarchivosanexos AS UAA
            join base_usuarios as U on (U.nIdUsuario=UAA.nIdUsuario AND UAA.bActivo=1)
            where UAA.nIdUsuario=:nIdUsuario AND UAA.nTipo=2 AND UAA.bActivo=1
            `,
            {
                replacements: { nIdUsuario: req.params.nIdUsuario },
                type: QueryTypes.SELECT
            }
        );

        return {
            status: 200,
            error: '',
            data: data[0],
        };
    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Actualizar avatar del usuario
async function updateImagenPerfilUsuario(req) {
    const params = req.body;
    try {
        if (params.nIdCuenta !== null) {
            const data = await base_usuarioscuentas.update({
                aImagen: params.aAvatarUsuario,
                cUsuario_UltimaModificacion: params.cUsuario,
                dFecha_UltimaModificacion: new Date()
            },
            { where: {
                nIdUsuario: params.nIdUsuario,
                nIdCuenta: params.nIdCuenta,
                bActivo: 1
                }
            });

            return {
                status: 200,
                error: '',
                data: ['OK']
            };

        } else {
            const file = await base_usuariosarchivosanexos.findOne({
                where: { nIdUsuario: params.nIdUsuario, nTipo: 5, bActivo: 1 },
            });
            if (file === null || file.length === 0) {
                // guardar en base de datos
                const data = await base_usuariosarchivosanexos.create({
                    nIdUsuario: params.nIdUsuario,
                    aArchivo: params.aAvatarUsuario,
                    cNombreArchivo: params.cNombreArchivo,
                    nTipo: 5,
                    bActivo: 1,
                    cUsuario_Registro: 'SA',
                    dFecha_Registro: new Date()
                });
            } else {
                const data = await base_usuariosarchivosanexos.update({
                    aArchivo: params.aAvatarUsuario,
                    cNombreArchivo: params.cNombreArchivo,
                    cUsuario_UltimaModificacion: params.cUsuario,
                    dFecha_UltimaModificacion: new Date()
                },
                { where: {
                    nIdUsuario: params.nIdUsuario,
                    nTipo: 5,
                    bActivo: 1
                    }
                });
            }

            return {
                status: 200,
                error: '',
                data: ['OK']
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

// Actualizamos los datos generales de la empresa, dirección, logo
// Dirección Sucursal Matriz y Representante Legal
async function actualizarDatosGeneralesEmpresa(req) {
    const values = [];
    try {
        const data = await base_usuarios.update({
            nClasificacion: req.body.nClasificacion,
            cRegistroIdentificador: req.body.cRegistroIdentificador,
            cEmpresa: req.body.cEmpresa,
            nPais: req.body.nPaisSucursalMatriz,
            cCP: req.body.cCP,
            cEmail: req.body.cEmail,
            cUsuario_UltimaModificacion: req.body.cEmail,
            dFecha_UltimaModificacion: new Date()
        },
        { where: { nIdUsuario: req.body.nIdUsuario, bActivo: 1 } });

        if (data === null || data.length === 0) {
            return {
                status: 400,
                error: 'Problema al actualizar los datos generales de la empresa, verifique la informacion.',
                data,
            };
        } else {
            const anexo_usuario = await base_usuariosanexos.findOne({
                where: { nIdUsuario: req.body.nIdUsuario, bActivo: 1 },
            });

            if (anexo_usuario === null || anexo_usuario.length === 0) {
                // guardar en base de datos
                const sql =
                `INSERT INTO base_usuariosanexos
                    (nIdUsuario,
                    nPaisSucursalMatriz,
                    cCPSucursalMatriz,
                    cEstadoSucursalMatriz,
                    cMunicipioSucursalMatriz,
                    cCiudadSucursalMatriz,
                    cDireccionSucursalMatriz,
                    cNombreRepresentanteEmpresa,
                    cApellidoRepresentanteEmpresa,
                    cCargoRepresentanteEmpresa,
                    nIDFormaPagoPreferido,
                    cDescripcionEmpresa,
                    bActivo,
                    cUsuario_Registro,
                    dFecha_Registro)
                    VALUES :values
                `;
                values.push([
                    req.body.nIdUsuario,
                    req.body.nPaisSucursalMatriz,
                    req.body.cCP,
                    req.body.cEstadoSucursalMatriz,
                    req.body.cMunicipioSucursalMatriz,
                    req.body.cCiudadSucursalMatriz,
                    req.body.cDireccionSucursalMatriz,
                    req.body.cNombreRepresentanteEmpresa,
                    req.body.cApellidoRepresentanteEmpresa,
                    req.body.cCargoRepresentanteEmpresa,
                    req.body.nIDFormaPagoPreferido,
                    req.body.cDescripcionEmpresa,
                    1,
                    'SA',
                    new Date()
                ]);
                const response = await sequelize.query(
                    sql,
                    {
                        replacements: { values: values},
                        type: QueryTypes.INSERT
                    }
                );
            } else {
                let response = await base_usuariosanexos.update({
                    nPaisSucursalMatriz: req.body.nPaisSucursalMatriz,
                    cCPSucursalMatriz: req.body.cCP,
                    cEstadoSucursalMatriz: req.body.cEstadoSucursalMatriz,
                    cMunicipioSucursalMatriz: req.body.cMunicipioSucursalMatriz,
                    cCiudadSucursalMatriz: req.body.cCiudadSucursalMatriz,
                    cDireccionSucursalMatriz: req.body.cDireccionSucursalMatriz,
                    cNombreRepresentanteEmpresa: req.body.cNombreRepresentanteEmpresa,
                    cApellidoRepresentanteEmpresa: req.body.cApellidoRepresentanteEmpresa,
                    cCargoRepresentanteEmpresa: req.body.cCargoRepresentanteEmpresa,
                    nIDFormaPagoPreferido: req.body.nIDFormaPagoPreferido,
                    cDescripcionEmpresa: req.body.cDescripcionEmpresa,
                    cUsuario_UltimaModificacion: req.body.cEmail,
                    dFecha_UltimaModificacion: new Date()
                },
                { where: { nIdUsuario: req.body.nIdUsuario, bActivo: 1 } });
            }
            return {
                status: 200,
                error: '',
                data,
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

// Guarda un archivo tipo base64 en la tabla
async function saveArchivoEmpresa(req) {
    const values = [];
    try {
        const file = await base_usuariosarchivosanexos.findOne({
            where: { nIdUsuario: req.body.nIdUsuario, nTipo: req.body.nTipo },
        });
        if (file === null || file.length === 0) {
            // guardar en base de datos
            const sql =
            `
                INSERT INTO base_usuariosarchivosanexos
                (nIdUsuario, nTipo, aArchivo, cNombreArchivo, bActivo, cUsuario_Registro, dFecha_Registro)
                VALUES :values
            `;

            values.push([
                req.body.nIdUsuario,
                req.body.nTipo,
                req.body.aArchivo,
                req.body.cNombreArchivo,
                1,
                'SA',
                new Date(),
            ]);
            const data = await sequelize.query(
                sql,
                {
                    replacements: { values: values},
                    type: QueryTypes.INSERT
                }
            );
        } else {
            let data = await base_usuariosarchivosanexos.update({
                aArchivo: req.body.aArchivo,
                cNombreArchivo: req.body.cNombreArchivo,
                cUsuario_UltimaModificacion: req.body.cEmail,
                dFecha_UltimaModificacion: new Date(),
            }, { where: { nIdUsuario: req.body.nIdUsuario, nTipo: req.body.nTipo } });
        }
        return {
            status: 200,
            error: '',
            data: ['Ok']
        };
    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}
async function getRoles(req) {

    try {
        const data = await base_roles.findAll({
          
        });

        return {
            status: 200,
            error: '',
            data,
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

async function getTipo(req) {

    try {
        const data = await base_tipo.findAll({
          
        });

        return {
            status: 200,
            error: '',
            data,
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

async function getUsuarios(req) {

    try {
        const data = await sequelize.query(
            `
            select usuarios.*,
            CASE
                
                WHEN estado = 1 THEN "Activo"
                ELSE "Inactivo"
            END AS estados,
            CASE
                
                WHEN rol = 1 THEN "Administrador"
                WHEN rol = 2 THEN "Coordinador"
                ELSE "Voluntario"
            END AS roles,
            profesiones.descripcion,tipo.nombre
             from usuarios
             INNER JOIN profesiones ON profesiones.id_pro = usuarios.ocupacion
             INNER JOIN tipo ON tipo.idtipo = usuarios.tipo
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );

        return {
            status: 200,
            error: '',
            data:data[0],
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

async function getUsuariosTecnicos(req) {

    try {
        const data = await sequelize.query(
            `
            select * from usuarios where estado=1 and rol=1`,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );

        return {
            status: 200,
            error: '',
            data:data[0],
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}
async function enviarCorreo(params) {
    console.log("se Ejecuto")
     try {
         const res = await correo.asignarContraseña(params);
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

 async function getUsuariosEquipos(req) {
let params = req.query.id
//console.log(req.body,'hola')
    try {
        const data = await sequelize.query(
            `
            select *,
            CASE
                
                WHEN estado = 1 THEN "Activo"
                ELSE "Inactivo"
            END AS estados,
            CASE
                
                WHEN rol = 1 THEN "Administrador"
                WHEN rol = 2 THEN "Coordinador"
                ELSE "Voluntario"
            END AS roles,
            CASE
                
            WHEN equipo = ${params} THEN "Asignado"
           
            ELSE "Disponible"
        END AS equiposA 
             from usuarios,profesiones WHERE estado = 1 AND equipo=${params}  and ocupacion = id_pro or estado=1 and equipo=0 and ocupacion = id_pro
            `,
            {
                replacements: {
                   
                },
                type: QueryTypes.SELECT
            }
        );

        return {
            status: 200,
            error: '',
            data:data[0],
        };

    } catch (err) {
        // do something
        return {
            status: 500,
            error: err,
            data: [],
        };
    }
}

// Obtener datos de usuario
async function getUsuarioSalego(req) {
    let data;
    try {

        data = await sequelize.query(
            `
            select *
            from Usuarios
           
            `,
            {
                replacements: { 

                 },
                type: QueryTypes.SELECT
            }
        );

        return {
            status: 200,
            error: '',
            data: data[0],
        };
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
    crearUsuario,
    getUsuario,
    getUsuariosEquipos,
    updateUsuario,
    updateContraseña,
    getRoles,
    getUsuarios,
    getTipo,
    getUsuariosTecnicos,
    getUsuarioSalego
};