require('dotenv').config();
const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const uri_db = `mongodb+srv://idioma_master:idioma_master2025@cluster0.d8q7u1u.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri_db)
  .then(() => {
    console.log('La base de datos está conectada');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error.message);
  });
