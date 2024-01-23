const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_socios = sequelize.define(
    "socios", {
        idsocios: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        abreviatura: Sequelize.STRING,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'socios'
    }
);


module.exports = base_socios;