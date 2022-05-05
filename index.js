const express = require('express'),
  bodyParser = require('body-parser'),
  uuid = require('uuid'),
  morgan = require('morgan');

const app = express();

let topMovies = [
  {
    title: 'Movie 1',
  },
  {
    title: 'Movie 2',
  },
  {
    title: 'Movie 3',
  },
  {
    title: 'Movie 4',
  },
  {
    title: 'Movie 5',
  },
  {
    title: 'Movie 6',
  },
  {
    title: 'Movie 7',
  },
  {
    title: 'Movie 8',
  },
  {
    title: 'Movie 9',
  },
  {
    title: 'Movie 10',
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

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
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
