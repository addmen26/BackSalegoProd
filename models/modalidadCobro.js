const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_modalidadCobro = sequelize.define(
    "modalidad_cobro", {
        id_modalidad: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_modalidad:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'modalidad_cobro'
    }
);


module.exports = base_modalidadCobro;