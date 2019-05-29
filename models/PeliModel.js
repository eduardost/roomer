var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peliSchema = new Schema({
    peliId: String,
    comentario: String,
    rating: Number,
    usrId: String
});

var Pelis = mongoose.model('Pelis', peliSchema);
console.log("se creo modelo peliSchema");
module.exports = Pelis;