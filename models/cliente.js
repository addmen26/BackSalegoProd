const Sequelize = require ('sequelize');
const sequelize = require('../db/db_sequelize');


const base_cliente = sequelize.define(
    "cliente",{
        id: {
            type: Sequelize.SMALLINT,
            primaryKey: true,
            autoIncrement: true
        },
        holding :Sequelize.STRING,
        tipo_cliente:Sequelize.STRING,
        razon_social: Sequelize.STRING,
        nombre_fantasia: Sequelize.STRING,
        rut :Sequelize.STRING,
        pais: Sequelize.STRING,
        direccion: Sequelize.STRING,
        ciudad: Sequelize.STRING,
        region_o_zona:Sequelize.STRING,
        giro:Sequelize.STRING,
        industria:Sequelize.STRING,
        sector:Sequelize.STRING,
        nombre_representante:Sequelize.STRING,
        fono_representante:Sequelize.INTEGER,
        correo_representante:Sequelize.STRING,
        dueno_cuenta:Sequelize.STRING,
    }, {
        timestamps: false,
        tableName: 'cliente'
    }
);


module.exports = base_cliente;