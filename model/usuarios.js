const { DataTypes } = require('sequelize');
const { db } = require('../database/config.db');

const Usuario = db.define('Usuarios', {
    Usuario_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
   
    Usuario_Name: {
        type: DataTypes.STRING,
        require: [true, 'El nombre del usuario es obligatorio'],
    }
   
}, {
    tableName: 'Usuarios',
    timestamps: false // Impide la creacion automatica de 'createdAt', 'updatedAt'
},
{
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
});

module.exports = {
    Usuario
};
