const Sequelize = require('sequelize');
const sequelize = require('../db/db_sequelize');

const base_convocatoria = sequelize.define(
    "convocatoria", {
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        //idConvocatoria: Sequelize.STRING,
        idProyecto: Sequelize.STRING,
        actividad: Sequelize.STRING,
        locacion: Sequelize.STRING,
        fecha: Sequelize.DATE,
        puntoEncuentro: Sequelize.STRING,
        duracion: Sequelize.STRING,
        horaEncuentro:Sequelize.STRING,
        horaSalida:Sequelize.STRING,
        horaRetorno:Sequelize.STRING,
        cantidadVoluntarios:Sequelize.STRING,
        equipos:Sequelize.STRING,
        logistica:Sequelize.STRING,
        comentarios:Sequelize.STRING,
        insumos:Sequelize.STRING,
        estado:Sequelize.TINYINT,
        fecha_registro:Sequelize.DATE,
        fecha_modificacion:Sequelize.DATE
    }, {
        timestamps: false,
        tableName: 'convocatoria'
    }
);


module.exports = base_convocatoria;