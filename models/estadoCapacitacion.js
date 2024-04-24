const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_estadoCapacitacion = sequelize.define(
    "estado_capacitacion", {
        id_estadoCapacitacion: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_estadoCapacitacion:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'estado_capacitacion'
    }
);


module.exports = base_estadoCapacitacion;