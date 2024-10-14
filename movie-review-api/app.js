const express = require('express');
const path = require('path');  // Add this to handle file paths
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample in-memory movie data
let movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', reviews: [] },
  { id: 2, title: 'The Matrix', director: 'Wachowskis', reviews: [] },
];

// Your API routes (same as before)
// GET all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// POST a new movie
app.post('/movies', (req, res) => {
  const { title, director } = req.body;

  if (!title || !director) {
    return res.status(400).json({ message: 'Title and director are required' });
  }

  const newMovie = {
    id: movies.length + 1,
    title: title,
    director: director,
    reviews: []
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
