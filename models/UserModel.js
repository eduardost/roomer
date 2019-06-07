var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    token: String,
    nombre: String,
    apellido: String,
    sexo: String,
    edad: Number,
    dni: String,
    telefono: String,
    codArea: Number,
    foto: String,
    descripcion: String,
});

var Usuarios = mongoose.model('Usuario', usuarioSchema);
console.log("se creo modelo de usuario");
module.exports = Usuarios;