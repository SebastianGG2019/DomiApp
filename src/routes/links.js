const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const path = require('path');

router.get('/', (req, res)=>{
	res.render('customer');
});
router.get('/Administrador', customerController.list);
router.get('/borrar/:IdUsuario', customerController.borrar);
router.get('/Actualizar/:IdUsuario', customerController.Actualizar);
router.post('/Actualizar/:IdUsuario', customerController.update);
router.post('/Add',customerController.save);
router.get('/login',(req, res)=>{
	res.sendFile(path.resolve(__dirname, '../views/login.html'));
});


module.exports = router; 