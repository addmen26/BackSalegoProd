const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_fichaTecnica = sequelize.define(
    "ficha_tecnica", {
        id_ficha: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_ficha:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'ficha_tecnica'
    }
);


module.exports = base_fichaTecnica;