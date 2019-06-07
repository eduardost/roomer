var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matchSchema = new Schema({
    token: String,
    match: String,
});

var Filtro = mongoose.model('Match', matchSchema);
console.log("se creo modelo matchSchema");
module.exports = Match;