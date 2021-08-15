const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    Nombre: {
        type: String,
        required: [true, 'The name is required'],
    },
    Apellido:{
        type: String,
        required: [true, 'The lastname is required'],
    },
    Telefono:{
        type: Number,
        required: [true, 'The phone number is required'],
    },
    Direccion:{
        type: String,
        required: [true, 'The adress is required'],
    },
    Correo:{
        type:String,
        required: [true, 'The email is required'],
    },
    idTipoUsuario:{
        type: Number,
        required: [true, 'The id type user is required'],
    }

});

module.exports = model('User',UserSchema);