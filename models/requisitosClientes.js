const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_requisitosClientes = sequelize.define(
    "requisitos_clientes", {
        id_requisitos: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_requisitos:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'requisitos_clientes'
    }
);


module.exports = base_requisitosClientes;