const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_periodicidad = sequelize.define(
    "periodicidad", {
        id_periodicidad: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_periodicidad:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'periodicidad'
    }
);


module.exports = base_periodicidad ;