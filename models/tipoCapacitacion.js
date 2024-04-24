const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoCapacitacion = sequelize.define(
    "tipo_capacitacion", {
        id_capacitacion: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_capacitacion:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'tipo_capacitacion'
    }
);


module.exports = base_tipoCapacitacion;