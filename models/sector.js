const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_sector = sequelize.define(
    "sector", {
        idsector: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'sector'
    }
);


module.exports = base_sector;