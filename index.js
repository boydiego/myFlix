const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid'),
  morgan = require('morgan');

const app = express();

let topMovies = [
  {
    Title: 'Movie 1',
    Description: 'description text',
    Genre: {
      Name: 'Drama',
      Description: 'genre Drama description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 2',
    Description: 'description text',
    Genre: {
      Name: 'Thriller',
      Description: 'genre Thriller description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 3',
    Description: 'description text',
    Genre: {
      Name: 'Action',
      Description: 'genre Action description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 4',
    Description: 'description text',
    Genre: {
      Name: 'Action',
      Description: 'genre Action description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 5',
    Description: 'description text',
    Genre: {
      Name: 'Adventure',
      Description: 'genre Adventure description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 6',
    Description: 'description text',
    Genre: {
      Name: 'Drama',
      Description: 'genre Drama description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 7',
    Description: 'description text',
    Genre: {
      Name: 'Adventure',
      Description: 'genre Adventure description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 8',
    Description: 'description text',
    Genre: {
      Name: 'Comedy',
      Description: 'genre Comedy description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 9',
    Description: 'description text',
    Genre: {
      Name: 'Adventure',
      Description: 'genre Adventure description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
  {
    Title: 'Movie 10',
    Description: 'description text',
    Genre: {
      Name: 'Thriller',
      Description: 'genre Thriller description',
    },
    Director: {
      Name: 'director name',
      Bio: 'director bio',
    },
    ImageUrl: 'https://picsum.photos/200/300',
    Featured: false,
  },
];

let users = [
  {
    id: 1,
    name: 'Diego',
    favoriteMovies: ['Movie 3'],
  },
  {
    id: 2,
    name: 'Natu',
    favoriteMovies: ['Movie 1', 'Movie 5'],
  },
];

app.use(morgan('common'));

app.use(express.static('public'));

// --------- GET requests ---------
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

// Return a list of ALL movies to the user
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

//Return data about a single movie by title to the user
app.get('/movies/:title', (req, res) => {
  res.json(
    topMovies.find((movie) => {
      return movie.Title === req.params.title;
    })
  );
});

// Return data about a genre by name/title (e.g., “Thriller”)
app.get('/movies/genre/:genreName', (req, res) => {
  res.json(
    topMovies.find((movie) => {
      return movie.Genre.Name === req.params.genreName;
    }).Genre
  );
});

// Return data about a director by name
app.get('/movies/directors/:directorName', (req, res) => {
  res.json(
    topMovies.find((movie) => {
      return movie.Director.Name === req.params.directorName;
    }).Director
  );
});

// --------- POST requests ---------
// Register new users
app.post('/users', (req, res) => {
  res.send('new user created');
  // const newUser = req.body;

  // if (newUser.name) {
  //   newUser.id = uuid.v4();
  //   users.push(newUser);
  //   res.send(newUser);
  // }
});

// Allow users to add a movie to their list of favorites
app.post('/users/:id/:movieTitle', (req, res) => {
  res.send('movie added to favorites');
});

// --------- PUT requests ---------
// allow users to update user info
app.put('/users/:id', (req, res) => {
  res.send('User name updated');
});

// --------- DELETE requests ---------
// Allow users to remove a movie from their list of favorites
app.delete('/users/:id/:movieTitle', (req, res) => {
  res.send('movie successfully removed from favorites');
});

// Allow existing users to deregister
app.delete('/users/:id', (req, res) => {
  res.send('user account successfully deactivated');
});

// Error handling
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

// listen for request
app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
