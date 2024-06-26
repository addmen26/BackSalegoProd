const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_sector = sequelize.define(
    "sector", {
        id_sector: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_sector: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'sector'
    }
);


module.exports = base_sector;