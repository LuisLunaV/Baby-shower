const { DataTypes } = require('sequelize');
const { db } = require('../database/config.db');
const Usuario = require('./usuarios.js'); 
const Votos = db.define('Votos', {
    Voto_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Usuario_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'Usuario_ID'
        }
    },
    Voto: {
        type: DataTypes.ENUM('niño', 'niña'),
        allowNull: false
    },
    Fecha_Voto: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = { Votos }
