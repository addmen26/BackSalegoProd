const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_usuarios = sequelize.define(
    "usuarios", {
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombres:Sequelize.STRING,
        apellidos:Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        ocupacion:Sequelize.STRING,
        rol: Sequelize.STRING,
        estado: Sequelize.TINYINT,
        token: Sequelize.STRING,
        equipo:Sequelize.TINYINT,
        tipo: Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'usuarios'
    }
);


module.exports = base_usuarios;