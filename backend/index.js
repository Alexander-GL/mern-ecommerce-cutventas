// Importar librerias
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');  // Cruza datos de backend a frontend

// Metodos de librerias
const app = express();
require('dotenv').config();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database Setup
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => { console.log("Conexión de Base de Datos exitosa")});

// Rutas
app.use('/api/category', require('./routes/category'));
app.use('/api/food', require('./routes/food'));
app.use('/api/fashionWoman', require('./routes/fashionWoman'));
app.use('/api/fashionMen', require('./routes/fashionMen'));
app.use('/api/fit', require('./routes/fit'));
app.use('/api/laptop', require('./routes/laptop'));
app.use('/api/smartphone', require('./routes/smartphone'));
app.use('/api/electronic', require('./routes/electronic'));
app.use('/api/book', require('./routes/book'));
app.use('/api/other', require('./routes/other'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));

// Escuchar el puerto
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor MERN esta siendo ejecutado en el puerto ${port}`);
})
