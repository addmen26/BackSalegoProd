const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoEmpresa = sequelize.define(
    "tipo_empresa", {
        id_tipoEmpresa: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_tipoempresa:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'tipo_empresa'
    }
);


module.exports = base_tipoEmpresa;