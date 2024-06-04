const { Router } = require('express');
const { agregarUsuario } = require('../controller/usuarios.controller.js');

const router = Router();

router.post('/agregar', agregarUsuario );

module.exports = router;