const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoSoporte = sequelize.define(
    "tipo_soporte", {
        id_soporte: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_soporte:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'tipo_soporte'
    }
);


module.exports = base_tipoSoporte;