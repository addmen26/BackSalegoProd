const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_industria = sequelize.define(
    "industria", {
        id_industria: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_industria:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'industria'
    }
);


module.exports = base_industria;