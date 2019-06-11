var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matchSchema = new Schema({
    token: String,
    match: String,
});

var Match = mongoose.model('Match', matchSchema);
console.log("se creo modelo Match.");
module.exports = Match;