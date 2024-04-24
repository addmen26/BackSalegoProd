const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_rangoEmpleados = sequelize.define(
    "rango_empleados", {
        id_rango: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_rango:Sequelize.STRING,
        descripcion:Sequelize.STRING,
        fecha_modificacion: Sequelize.DATE,
        fecha_creacion: Sequelize.DATE,
    }, {
        timestamps: false,
        tableName: 'rango_empleados'
    }
);


module.exports = base_rangoEmpleados;