const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_voluntariosregis = sequelize.define(
    "voluntariosregis", {
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombres:Sequelize.STRING,
        apellidos:Sequelize.STRING,
        cedula: Sequelize.STRING,
        telefono: Sequelize.STRING,
        email: Sequelize.STRING,
        ocupacion: Sequelize.STRING,
        revisado: Sequelize.SMALLINT,
        fecha_nacimiento: Sequelize.STRING,
        fecha_creacion: Sequelize.DATE,
        fecha_modificacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'voluntariosregis'
    }
);


module.exports = base_voluntariosregis;