var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var likeSchema = new Schema({
    token: String,
    like: String,
});

var Likes = mongoose.model('Likes', likeSchema);
console.log("se creo modelo like");
module.exports = Likes;