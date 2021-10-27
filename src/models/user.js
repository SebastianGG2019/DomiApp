const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    lastname: {
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    google: {
        type: Boolean
    },
    phone: {
        type: String,
        required: [true, 'El telefono es obligatorio'],
    },
    adress: {
        type: String,
        required: [true, 'La dirección es obligatoria'],
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    userType: {
        type: String,
        required: [true, 'El tipo de usuario es obligatorio'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },

});

module.exports = model('User', UserSchema);