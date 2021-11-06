const { Router } = require('express');

const user = require('../controllers/user');

const router = Router();

// Rutas usuario
router.get('/', user.getUsers);

router.post('/auth', user.getUserByAuth);

router.post('/guardar', user.saveUser);

router.get('/:id', user.findUser);

router.put('/:id', user.updateUser);

router.delete('/:id', user.removeUser);


module.exports = router; 