// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

   var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}
var newMovieList = [{
  title: 'Pulp Fiction',
  genres: ' neo-noir',
  director: 'Quentin Tarantino',
  releaseDate: 10141994
},
{
  title: 'Enter The Void',
  genres: ' thriller',
  director: 'Gaspar Noé',
  releaseDate: 09242010
}
]
db.Movie.create(newMovieList, function(err, movie){
  if (err){
    return console.log("Error:", err);
  }
  process.exit();
})
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
