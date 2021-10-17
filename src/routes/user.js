const { Router } = require('express')

const user = require('../controllers/user');

const router = Router();

// Rutas usuario
router.get('/administrador', user.list);

router.post('/guardar',user.save);

router.get('/usuario/:IdUsuario', user.findOne);

router.post('/actualizar/:IdUsuario', user.update);

router.get('/borrar/:IdUsuario', user.borrar);


module.exports = router; 