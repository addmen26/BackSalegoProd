const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_moneda = sequelize.define(
    "moneda", {
        id_moneda: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_moneda:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'moneda'
    }
);


module.exports = base_moneda;