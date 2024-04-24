'use strict'


const base_cliente = require('../../models/cliente');
const sequelize = require('../../db/db_sequelize');
const QueryTypes = require('sequelize');

// Obtener Clientes(GET)
async function getAllClientes(req) {
  let data;
  try {
    data = await sequelize.query(
      `
        select * FROM cliente `,
      {
        replacements: {
        },
        type: QueryTypes.SELECT
      }
    );
    console.log(data)
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


// Crear Cliente(POST)
async function postCliente(req) {
   
  let data;
  const params = req.body;
  
console.log(params)
    try {
    data = await base_cliente.create({
      
          nombre	:params.nombre,	
        	email	:params.email,	
        	rut		:params.rut,
        	telefono	:params.telefono,	
        	actividad	:params.actividad,	
        	pais		:params.pais,
        	region		:params.region,
         	ciudad		:params.ciudad,
        	direccion		:params.direccion,
        	tipoEmpresaGeo		:params.tipoEmpresaGeo,
        	partner		:params.partner,
        	rubro		:params.rubro,
        	holding		:params.holding,
        	matriz		:params.matriz,
        	nombreFantasia		:params.nombreFantasia,
        	holdingId		:params.holdingId,
        	plazoPago		:params.plazoPago,
        	contactoPago		:params.contactoPago,
        	emailPago		:params.emailPago,
        	direccionPago		:params.direccionPago,
        	lineaCredito		:params.lineaCredito,
        	nombreRepresentante		:params.nombreRepresentante,
        	emailRepresentante		:params.emailRepresentante,
        	rutRepresentante		:params.rutRepresentante,
        	nombreFacturacion		:params.nombreFacturacion,
        	emailFacturacion		:params.emailFacturacion,
        	rutFacturacion		:params.rutFacturacion,
        	nombreCobranza		:params.nombreCobranza,
        	emailCobranza	:params.emailCobranza,
        	rutCobranza		:params.rutCobranza,
        	nombreOperacion		:params.nombreOperacion,
        	emailOperacion		:params.emailOperacion,
        	rutOperacion	:params.rutOperacion,
        	nombreOtro		:params.nombreOtro,
        	emailOtro	:params.emailOtro,
          rutOtro:params.rutOtro,
        	estado	:params.estado,
        tipoCliente	:params.tipoCliente,
        tipoContrato:params.tipoContrato,
    	fecha_modificacion	: new Date(),
       	fecha_creacion	:new Date()

    }),
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

// Actualizar Cliente(PUT)
async function putCliente(id,params) {
  //const params = req.body;
  //const id = req.params.id; 

  

  try {
    const data = await base_cliente.update(
      {
        holding: params.holding,
        tipo_cliente: params.tipo_cliente,
        razon_social: params.razon_social,
        nombre_fantasia: params.nombre_fantasia,
        rut: params.rut,
        pais: params.pais,
        direccion: params.direccion,
        ciudad: params.ciudad,
        region_o_zona: params.region_o_zona,
        giro: params.giro,
        industria: params.industria,
        sector: params.sector,
        nombre_representante: params.nombre_representante,
        fono_representante: params.fono_representante,
        correo_representante: params.correo_representante,
        dueno_cuenta: params.dueno_cuenta
      },
     { where: { id: params.codigo } });

    if (data === null || data.length < 1) {
        return {
            status: 500,
            error: "Problema al actualizarla el cliente.",
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



  
module.exports = {
  getAllClientes,
  postCliente,
  putCliente

};









