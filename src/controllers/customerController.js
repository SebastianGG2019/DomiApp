const path = require('path');
const User = require('../models/user');
const controller = {};

// Funcion para listar usuarios
controller.list =  async (req, res) => {
	const users = await User.find();
	res.render('Administrador', {
		data: users
	});
};

// Funcion para guardar un usuario
controller.save = async (req,res) => {
	const {Nombre, Apellido, Telefono, Direccion, Correo} = req.body;	
	const user = new User({
		Nombre, 
		Apellido, 
		Telefono, 
		Direccion, 
		Correo, 
		idTipoUsuario: 1,
	});
	await user.save();
};

// Funcion para buscar un usuario
controller.findOne = async (req,res) =>{
	const Id = req.params.IdUsuario;
	const user = await User.findById(Id);
};

// Funcion para actualizar un usuario
controller.update = async (req, res) => {
	const Id = req.params.IdUsuario;
	const data = req.body;
	const user = await User.findByIdAndUpdate(Id, data);
};

// Funcion para borrar un usuario
controller.borrar = async (req,res) =>{
	const Id = req.params.IdUsuario;
	const user =  await User.findByIdAndDelete(Id); 
};

module.exports = controller;
