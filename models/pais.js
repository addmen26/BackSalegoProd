const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_pais = sequelize.define(
    "pais", {
        id_pais: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_pais:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'pais'
    }
);


module.exports = base_pais;