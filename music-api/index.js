const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const Playlist = require('./models/playlist');
const delay = require('./utils/delay');
const { getVehicles, getVehicleById } = require('./models/vehicle')

const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

app.get('/api/playlists', async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/playlists/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id);
    if (playlist) {
      await delay(1000);
      res.json(playlist);
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/vehicles', getVehicles);

app.get('/api/vehicles/:vehicleId', getVehicleById);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
