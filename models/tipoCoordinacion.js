const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoCoordinacion= sequelize.define(
    "tipo_coordinacion", {
        id_Coordinacion: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_coordinacion:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'tipo_coordinacion'
    }
);


module.exports = base_tipoCoordinacion;