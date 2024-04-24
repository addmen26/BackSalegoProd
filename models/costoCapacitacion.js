const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_costoCapacitacion = sequelize.define(
    "costo_capacitacion", {
        id_costo: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_costo:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'costo_capacitacion'
    }
);


module.exports = base_costoCapacitacion;