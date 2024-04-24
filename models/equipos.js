const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_equipos= sequelize.define(
    "equipos", {
        id_equipos: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_equipos: Sequelize.STRING,
        descripcion:Sequelize.STRING,
        //miembros:Sequelize.STRING,
        estado:Sequelize.STRING,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'equipos'
    }
);


module.exports = base_equipos;