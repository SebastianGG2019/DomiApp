const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const path = require('path');

router.get('/administrador', customerController.list);
router.post('/guardar',customerController.save);
router.get('/usuario/:IdUsuario', customerController.findOne);
router.post('/actualizar/:IdUsuario', customerController.update);
router.get('/borrar/:IdUsuario', customerController.borrar);

module.exports = router; 