const path = require('path');
const User = require('../models/user');
const controller = {};

controller.list =  (req, res)=>{
		req.getConnection((err, conn) => {
			conn.query('SELECT * FROM usuarios', (err, usuarios) => {
				if (err) {
					res.json(err);
				}
				console.log(usuarios);
				res.render('Administrador',{
					data: usuarios
				});
			});
		});
};
controller.save = async (req,res) =>{
	const {Nombre, Apellido, Telefono, Direccion, Correo} = req.body;	
	const user = new User({Nombre, Apellido, Telefono, Direccion, Correo, idTipoUsuario: 1});
	await user.save();
	res.sendFile(path.resolve(__dirname, '../views/index.html'));

	// req.getConnection((err, conn) =>{
	// 	conn.query('INSERT INTO usuarios set ?',[data],(err, usuarios)=>{
	// 		console.log(usuarios);
	// 		res.sendFile(path.resolve(__dirname, '../views/index.html'));
	// 	});
	// });
};
controller.update = (req, res) =>{
	const Id = req.params.IdUsuario;
	const data = req.body;
	console.log(Id);
	req.getConnection((err, conn) => {	
		conn.query('UPDATE usuarios set ? WHERE IdUsuario = ?',[data, Id] ,(err, usuarios) => {
			res.redirect('/Administrador');
		});
	});
};
controller.Actualizar = (req,res) =>{
	const Id = req.params.IdUsuario;
	req.getConnection((err, conn) => {
			conn.query('SELECT * FROM usuarios WHERE IdUsuario = ?', Id, (err, usuarios) => {
				console.log(usuarios);
				res.render('Actualizar',{
					data: usuarios[0]
				});
			});
		});
};
controller.borrar = (req,res) =>{
	const Id = req.params.IdUsuario;
	req.getConnection((err, conn) =>{
		conn.query('DELETE FROM usuarios WHERE IdUsuario = ?',Id ,(err, rows)=>{
			res.redirect('/Administrador');
		});
	});
};


module.exports = controller;
