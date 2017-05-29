// require express and other modules
var express = require('express'),
    app = express();


// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */


app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/Vivwhite/express-personal-api/blob/master/README.md", // CHANGE ME
    baseUrl: "https://floating-plateau-84134.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Chief Unicorn"}, // CHANGE ME
      {method: "GET", path: "/api/movie", description: "Get my favorite movie"},
      {method: "POST", path: "/api/movie", description: "Recommend movies"},// CHANGE ME
    ]
  })
});

//endpoints for profile
app.get('/api/profile', function getProfile(req, res){
  var profile = {
    name: 'Vivienne White',
    githubUsername: 'vivwhite',
    githubLink: 'https://github.com/Vivwhite',
    githubProfileImage: 'https://github.com/account',
    personalSiteLink: 'https://missedgy.com',
    currentCity: 'Austin TX',
    pets: {
      name: 'Purrfect',
      type: 'domestic shorthair',
      age: 1,
      indoorcat: true
    }
  }
  res.json(profile);
});

//get all Movies
app.get('/api/movie', function(req, res){
  //find all movies in db
  db.Movie.find({}, function(err,allMovie){
    if (err){
        console.log("index error: " + err);
      }
    res.json({movie: allMovie});
  });
});


//find a movie by title
app.get('/api/movie:title', function(req, res){
  //find one book by its id
  movieTitle = req.params.title;
  db.Movie.findOne({title: movieTitle}, function(err, foundMovie){
    if(err){return console.log(err)}
    res.json(foundMovie);
  })
})

//create a new movie
app.post('/api/movie', function(req, res){
  // create a new movie with form data ('req.body')
  console.log('movie created', req.body);
  var newMovie = req.body;
  newBook._id = newBookUUID++;
  movie.push(newMovie);
  res.jason(newMovie);
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
