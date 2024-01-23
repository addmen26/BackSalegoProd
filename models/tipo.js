const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipo= sequelize.define(
    "tipo", {
        idtipo: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        fecha_creacion:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'tipo'
    }
);


module.exports = base_tipo;