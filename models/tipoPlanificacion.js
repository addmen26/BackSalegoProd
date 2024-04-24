const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoPlanificacion = sequelize.define(
    "tipo_planificacion", {
        id_planificacion: {
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
        tableName: 'tipo_planifiacion'
    }
);


module.exports = base_tipoPlanificacion;