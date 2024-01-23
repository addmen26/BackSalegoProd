const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const proyectos_usuarios = sequelize.define(
    "proyectos_usuarios", {
        idproyectos_usuarios: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_proyecto: Sequelize.STRING,
        id_usuario: Sequelize.STRING,
        estado:Sequelize.SMALLINT,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'proyectos_usuarios'
    }
);


module.exports = proyectos_usuarios;