const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Playlist model
const Playlist = sequelize.define('Playlist', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  spotify_url: {
    type: DataTypes.STRING,
  },
  image_url: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'playlists',
  timestamps: false,
});

module.exports = Playlist;