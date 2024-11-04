const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controller');

router.get('/', providerController.obtenerUsuarios);
router.get('/:id', providerController.obtenerUsuario);
router.post('/', providerController.crearUsuario);
router.put('/:id', providerController.actualizarUsuario);
router.delete('/:id', providerController.eliminarUsuario);

module.exports = router;