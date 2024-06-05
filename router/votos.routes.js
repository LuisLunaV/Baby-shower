const { Router } = require('express');
const { guardarVotoDelUsuario, contarVotos} = require('../controller/votos.controller.js');

const router = Router();

router.post('/agregar', guardarVotoDelUsuario);
router.get('/contar', contarVotos);
// router.get('/:Usuario_ID', mostrarVotoPorUsuario);

module.exports = router;