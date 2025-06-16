const express = require('express');
const morgan = require ('morgan');
const config = require('./config');
 

const arrendatario = require('./modulos/arrendatario/rutas')
const error = require('./red/errors');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//configuracion  
app.set('port', process.env.PORT || 3000);

//rutas
app.use('/api/arrendatario', arrendatario)
app.use(error);

 
module.exports = app;




