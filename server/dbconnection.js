const logger = require('./logger');
const dotenv = require('dotenv');
dotenv.config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_URL,
  dialect: process.env.DATABASE_DIALECT, // or 'sqlite', 'postgres', 'mariadb'
  port: process.env.DATABASE_PORT, // or 5432 (for postgres)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: console.log
});

const models = {
  Holiday: sequelize.import('./pg-models/holiday.js')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = sequelize;

module.exports = models;