const express =require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
require('dotenv').config();


// Importacion de rutas
const customerRoutes = require('./routes/links');
const { dbConnection } = require('./database/config');

// Configuraciones
app.set('port',process.env.PORT || 3000);

// Conectar con base de datos
dbConnection();

// Middlewares
app.use(morgan('dev'));	

app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', customerRoutes);

// Ejecutar servidor
app.listen(app.get('port'), ()=>{
	console.log(`Servidor en puerto: ${process.env.PORT}`);
});