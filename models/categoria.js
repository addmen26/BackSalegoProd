const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_categorias= sequelize.define(
    "categoria", {
        idcategoria: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'categoria'
    }
);


module.exports = base_categorias;