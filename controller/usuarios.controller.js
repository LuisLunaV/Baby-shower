const { request, response } = require('express');
const { Usuario } = require('../model/usuarios');

const usuarios = {
    agregarUsuario: async(req = request, res = response)=>{
        try {
            const { body } = req;
            const { Usuario_Name } = body;
            const usuario = new Usuario({ Usuario_Name });

            usuario.Usuario_Name = Usuario_Name.toUpperCase();

            await usuario.save();

           return res.status(200).json({
            usuario,
            registro: true
            })
        } catch (error) {
            return res.status(500).json({
                error,
                msg: "Hubo un error en el servidor",
              });
        }
    },

    guardarVotoDelUsuario: ( req = request, res = response )=>{

    },

    mostrarVotoPorUsuario:( req = request, res = response )=>{
        
    }
}

module.exports = usuarios;