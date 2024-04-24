const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_estadoTrato = sequelize.define(
    "estado_trato", {
        id_estadoTrato: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_estadoTrato:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'estado_trato'
    }
);


module.exports = base_estadoTrato;