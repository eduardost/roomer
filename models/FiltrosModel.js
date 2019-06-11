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

var Filtros = mongoose.model('Filtros', filtroSchema);
console.log("se creo modelo filtro");
module.exports = Filtros;