const { Sequelize } = require('sequelize');

// Connect to the PostgreSQL database
const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: 'db',
    dialect: 'postgres',
  }
);

module.exports = sequelize;