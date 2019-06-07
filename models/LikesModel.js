var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var likeSchema = new Schema({
    token: String,
    like: String,
});

var Like = mongoose.model('Likes', likeSchema);
console.log("se creo modelo likeSchema");
module.exports = Likes;