var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filtroSchema = new Schema({
    token: String,
    barrio: String,
    dineroMin: Number,
    dineroMax: Number,
    edadMin: Number,
    edadMax: Number,
    sexo: String
});

var Filtro = mongoose.model('Filtros', filtroSchema);
console.log("se creo modelo filtroSchema");
module.exports = Filtros;