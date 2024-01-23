const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipo_actividad= sequelize.define(
    "tipo_actividad", {
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        fecha_creacion:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'tipo_actividad'
    }
);


module.exports = tipo_actividad;