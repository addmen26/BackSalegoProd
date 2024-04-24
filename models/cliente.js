const Sequelize = require ('sequelize');
const sequelize = require('../db/db_sequelize');


const base_cliente = sequelize.define(
    "cliente",{
        idCliente: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
	
        	nombre	:Sequelize.STRING,	
        	email	:Sequelize.STRING,	
        	rut		:Sequelize.STRING,
        	telefono	:Sequelize.STRING,	
        	actividad	:Sequelize.STRING,	
        	pais		:Sequelize.STRING,
        	region		:Sequelize.STRING,
         	ciudad		:Sequelize.STRING,
        	direccion		:Sequelize.STRING,
        	tipoEmpresaGeo		:Sequelize.STRING,
        	partner		:Sequelize.STRING,
        	rubro		:Sequelize.STRING,
        	holding		:Sequelize.STRING,
        	matriz		:Sequelize.STRING,
        	nombreFantasia		:Sequelize.STRING,
        	holdingId		:Sequelize.STRING,
        	plazoPago		:Sequelize.STRING,
        	contactoPago		:Sequelize.STRING,
        	emailPago		:Sequelize.STRING,
        	direccionPago		:Sequelize.STRING,
        	lineaCredito		:Sequelize.STRING,
        	nombreRepresentante		:Sequelize.STRING,
        	emailRepresentante		:Sequelize.STRING,
        	rutRepresentante		:Sequelize.STRING,
        	nombreFacturacion		:Sequelize.STRING,
        	emailFacturacion		:Sequelize.STRING,
        	rutFacturacion		:Sequelize.STRING,
        	nombreCobranza		:Sequelize.STRING,
        	emailCobranza	:Sequelize.STRING,
        	rutCobranza		:Sequelize.STRING,
        	nombreOperacion		:Sequelize.STRING,
        	emailOperacion		:Sequelize.STRING,
        	rutOperacion	:Sequelize.STRING,
        	nombreOtro		:Sequelize.STRING,
        	emailOtro	:Sequelize.STRING,
            rutOtro:Sequelize.STRING,
        	estado	:Sequelize.STRING,
        tipoCliente	:Sequelize.STRING,
		tipoContrato	:Sequelize.STRING,
    	fecha_modificacion	: new Date(),
       	fecha_creacion	:new Date(),

    }, {
        timestamps: false,
        tableName: 'cliente'
    }
);


module.exports = base_cliente;