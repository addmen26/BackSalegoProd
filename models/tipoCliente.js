const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoCliente = sequelize.define(
    "tipo_cliente", {
        id_tipoCliente: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_cliente:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'tipo_cliente'
    }
);


module.exports = base_tipoCliente;