const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_metodosMarcaje = sequelize.define(
    "metodos_marcaje", {
        id_metodo: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_metodo:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'metodos_marcaje'
    }
);


module.exports = base_metodosMarcaje;