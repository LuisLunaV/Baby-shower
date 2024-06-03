const { request, response } = require('express');
const usuarios = {
    agregarUsuario:(req = request, res = response)=>{
        try {
            const usuario = req.body;
           return res.status(200).json({
            msg: 'agregar resgitro'
            })
        } catch (error) {
            return res.status(500).json({
                error,
                msg: "Hubo un error en el servidor",
              });
        }
    },

    guardarVotoDelUsuario: ()=>{

    },

    mostrarVotoPorUsuario:()=>{
        
    }
}

module.exports = usuarios;