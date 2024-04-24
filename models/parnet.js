const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_partner = sequelize.define(
    "partner", {
        id_partner: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_partner:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'partner'
    }
);


module.exports = base_partner;