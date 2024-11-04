const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controller');

router.get('/', providerController.obtenerProvedores);
router.get('/:id', providerController.obtenerProvedor);
router.post('/', providerController.crearProvedor);
router.put('/:id', providerController.actualizarProvedor);
router.delete('/:id', providerController.eliminarProvedor);

module.exports = router;

