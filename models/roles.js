const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_roles= sequelize.define(
    "roles", {
        idroles: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: Sequelize.STRING,
        fecha_creacion:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'roles'
    }
);


module.exports = base_roles;