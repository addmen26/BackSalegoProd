const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_voluntariosConvocatoria= sequelize.define(
    "voluntariosconvocatoria", {
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        idConvocatoria:Sequelize.SMALLINT,
        email: Sequelize.STRING,
        convocatorias: Sequelize.STRING,
        estados:Sequelize.SMALLINT,
        asistencia:Sequelize.SMALLINT,
        fecha_creacion:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'voluntariosconvocatoria'
    }
);


module.exports = base_voluntariosConvocatoria;