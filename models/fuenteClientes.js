const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_fuenteCliente = sequelize.define(
    "posible_cliente", {
        id_fuenteCliente: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_fuente:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'posible_cliente'
    }
);


module.exports = base_fuenteCliente;