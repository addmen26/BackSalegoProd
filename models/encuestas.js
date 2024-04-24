const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_encuestas = sequelize.define(
    "encuestas", {
        id_encuestas: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_encuestas:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'encuestas'
    }
);


module.exports = base_encuestas;