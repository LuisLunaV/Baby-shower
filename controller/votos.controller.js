const { request, response } = require('express');
const { Usuario } = require('../model/usuarios.js');
const { Votos } = require('../model/voto.js');

const votos = {
        guardarVotoDelUsuario: async(req = request, res = response) => {
        try {
            const { Usuario_ID, Voto } = req.body;

            // Verifica que el usuario exista
            const usuario = await Usuario.findByPk(Usuario_ID);
            if (!usuario) {
                return res.status(404).json({
                    msg: 'Usuario no encontrado'
                });
            }

            // Crea el voto
            const voto = new Votos({
                Usuario_ID,
                Voto
            });

            await voto.save();

            return res.status(200).json({
                voto,
                registro: true
            });
        } catch (error) {
            return res.status(500).json({
                error,
                msg: "Hubo un error en el servidor",
            });
        }
    },

    mostrarVotoPorUsuario: async(req = request, res = response) => {
        try {
            const { Usuario_ID } = req.params;

            // Verifica que el usuario exista
            const usuario = await Usuario.findByPk(Usuario_ID);
            if (!usuario) {
                return res.status(404).json({
                    msg: 'Usuario no encontrado'
                });
            }

            // Obtén los votos del usuario
            const votos = await Votos.findAll({
                where: { Usuario_ID }
            });

            return res.status(200).json({
                usuario,
                votos
            });
        } catch (error) {
            return res.status(500).json({
                error,
                msg: "Hubo un error en el servidor",
            });
        }
    },
    contarVotos: async (req = request, res = response) => {
        try {
       
            const votosNino = await Votos.count({ where: { Voto: 'niño' } });
            const votosNina = await Votos.count({ where: { Voto: 'niña' } });


           

            return res.status(200).json({
                'niño': votosNino,
                'niña': votosNina

            });
        } catch (error) {
            return res.status(500).json({
                error,
                msg: "Hubo un error en el servidor",
            });
        }
    }
}

module.exports = votos;