const User = require('../models/user');

const controller = {};

// Funcion para listar usuarios
controller.getUsers =  async (req, res) => {
	const users = await User.find();
	
	if (!users) {
		res.status(404).json({
			msg: 'No se encontro ningun usuario registrado'
		});
	}
	res.json({
		users
	});
};

// Funcion para guardar un usuario
controller.saveUser = async (req, res) => {
	// Leer el body de la petcion
	const { name, lastname, phone, adress, email, userType } = req.body;

	// Se instancia objeto User para guardar datos recibidos
	const user = new User({
		name, 
		lastname,
		phone,
		adress,
		email,
		userType,
	});

	// Verificar si el correo existe
	const existEmail = await User.findOne({ email });

	if (existEmail) {
		return res.status(400).json({
			msg: 'Ese correo ya se encuentra registrado'
		});
	}
	
	// Guardar en base de datos
	await user.save();

	// Responder con el usuario guardado
	res.json({
		user
	});
};

// Funcion para buscar un usuario
controller.findUser = async (req, res) => {
	// Leer parametro id
	const id = req.params.id;
	// Buscar usuario
	const user = await User.findById(id);
	
	if (!user) {
		res.status(404).json({
			msg: 'No se encontro ningun usuario con el id especificado'
		});
	}

	res.json({
		user
	});
};

// Funcion para actualizar un usuario
controller.updateUser = async (req, res) => {
	// Leer parametro id
	const id = req.params.id;
	const { name, lastname, phone, adress, email, userType } = req.body;
	const user = await User.findByIdAndUpdate(id, {
		name,
		lastname,
		phone,
		adress,
		email,
		userType
	});

	if (!user) {
		res.status(404).json({
			msg: 'No se encontro ningun usuario con el id especificado'
		});
	}

	res.json({
		user
	});
};

// Funcion para borrar un usuario
controller.removeUser = async (req, res) => {
	// Leer parametro id
	const id = req.params.id;
	const user =  await User.findByIdAndDelete(id);
	
	if (!user) {
		res.status(404).json({
			msg: 'No se encontro ningun usuario con el id especificado'
		});
	}

	res.json({
		user
	});
};

module.exports = controller;
