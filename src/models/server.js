const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.userPath = '/api/usuarios';

        // Conectar a la base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas del servicio
        this.routes();
    }

    async connectDB() {
        
        try {
            await dbConnection();
        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body a json
        this.app.use(express.json())

        // Registro de peticiones
        this.app.use(morgan('dev'));	
    }

    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen() {
        // Ejecutar servidor
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto: ${this.port}`);
        });
    }
}

// Se exporta servidor
module.exports = Server;