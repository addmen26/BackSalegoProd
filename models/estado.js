const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_estado = sequelize.define(
    "estado", {
        id_estado: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_estado:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'estado'
    }
);


module.exports = base_estado ;