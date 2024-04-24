const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_tipoEmpresaGeo = sequelize.define(
    "tipo_empresa_geo", {
        id_empresaGeo: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_empresaGeo:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'tipo_empresa_geo'
    }
);


module.exports = base_tipoEmpresaGeo;