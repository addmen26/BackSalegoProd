const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_proyectos = sequelize.define(
    "proyectos", {
        idproyectos: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        estado: Sequelize.TINYINT,
        grupos: Sequelize.STRING,
        codigo: Sequelize.STRING,
        fecha_inicio: Sequelize.DATE,
        fecha_fin: Sequelize.DATE,
        socios:Sequelize.TINYINT,
        indicadores:Sequelize.STRING,
        coordinador:Sequelize.STRING,
        coordinador_ms:Sequelize.STRING,
        coordinador_cs:Sequelize.STRING,
        coordinador_logistica:Sequelize.STRING,
        sector:Sequelize.STRING,
        logo:Sequelize.BLOB,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'proyectos'
    }
);


module.exports = base_proyectos;