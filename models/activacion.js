const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_activacion= sequelize.define(
    "activacion", {
        id_activacion: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_activacion:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'activacion'
    }
);


module.exports = base_activacion;