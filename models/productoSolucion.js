const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_productoSolucion = sequelize.define(
    "producto_solucion", {
        id_productoSolucion: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_producto:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'producto_solucion'
    }
);


module.exports = base_productoSolucion;