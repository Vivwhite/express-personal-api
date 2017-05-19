var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  title: String,
  genres: String,
  director: String,
  releaseDate: Number
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
