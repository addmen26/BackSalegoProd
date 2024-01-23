const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_profesiones = sequelize.define(
    "profesiones", {
        idprofesiones: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        id_pro: Sequelize.TINYINT,
        descripcion: Sequelize.STRING,
        id_categoria: Sequelize.TINYINT,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'profesiones'
    }
);


module.exports = base_profesiones;