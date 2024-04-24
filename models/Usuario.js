const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_usuarios = sequelize.define(
    "Usuarios", {
        id_usuario: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_usuario:Sequelize.STRING,
        correo_usuario:Sequelize.STRING,
        contraseña_usuario:Sequelize.STRING,
        tipo_usuario:Sequelize.TINYINT,
        // nombres:Sequelize.STRING,
        // apellidos:Sequelize.STRING,
        // email: Sequelize.STRING,
        // password: Sequelize.STRING,
        // ocupacion:Sequelize.STRING,
        // rol: Sequelize.STRING,
        // estado: Sequelize.TINYINT,
        // token: Sequelize.STRING,
        // equipo:Sequelize.TINYINT,
        // tipo: Sequelize.STRING,
        // fecha_modificacion: Sequelize.DATE,
        // fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'Usuarios'
    }
);


module.exports = base_usuarios;