var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    usrId: String,
    nombre:String,
    password:String,
});

var Usuarios = mongoose.model('Usuario', usuarioSchema);
console.log("se creo modelo de usuario");
module.exports = Usuarios;