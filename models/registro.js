const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Registro = sequelize.define('Registro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rfc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isEmail: true
        }
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Registro;
