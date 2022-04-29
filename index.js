const express = require('express');
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

app.use(express.static('public'));

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// listen for request
app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
