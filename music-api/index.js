const express = require('express');
const cors = require('cors'); 
const sequelize = require('./config/database');
const Playlist = require('./models/playlist');

const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

// Endpoint to get all playlists
app.get('/api/playlists', async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint to get a playlist by ID
app.get('/api/playlists/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id);
    if (playlist) {
      res.json(playlist);
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sync the Sequelize models and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
