const express =require('express');
const path = require('path');
const morgan = require('morgan');
// const mysql = require('mysql');
// const myConnection = require('express-myconnection');
const app = express();
require('dotenv').config();


//importing routes
const customerRoutes = require('./routes/links');
const { dbConnection } = require('./database/config');
//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Conectar con base de datos
dbConnection();

//middlewores
app.use(morgan('dev'));	
// app.use(myConnection(mysql,{
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	port: 3306,
// 	database: 'msdomicilios'
// }, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customerRoutes);


//static files
app.use(express.static(path.join(__dirname, 'public')));

//staring server
app.listen(app.get('port'), ()=>{
	console.log(`Server on port ${process.env.PORT}`);
});