const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_plantillas = sequelize.define(
    "plantillas", {
        id_plantillas: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_plantillas:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'plantillas'
    }
);


module.exports = base_plantillas;