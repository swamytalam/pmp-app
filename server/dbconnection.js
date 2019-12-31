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
  Allocation: sequelize.import('./pg-models/allocation'),
  Department: sequelize.import('./pg-models/department'),
  Group: sequelize.import('./pg-models/group'),
  Milestone: sequelize.import('./pg-models/milestone'),
  Month: sequelize.import('./pg-models/month'),
  Project: sequelize.import('./pg-models/project'),
  Role: sequelize.import('./pg-models/role'),
  Sprint: sequelize.import('./pg-models/sprint'),
  Status: sequelize.import('./pg-models/status'),
  Type: sequelize.import('./pg-models/type'),
  Year: sequelize.import('./pg-models/year'),
  SprintGroup: sequelize.import('./pg-models/sprint-group'),
  // Relational Modals
  Holiday: sequelize.import('./pg-models/holiday'),
  Resource: sequelize.import('./pg-models/resource'),
  SprintRelease: sequelize.import('./pg-models/sprint-release'),
  SprintEpic: sequelize.import('./pg-models/sprint-epic'),
  SprintTask: sequelize.import('./pg-models/sprint-task'),
 
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

// Create a database form model
// sequelize.sync({
//   force: true
// });

module.exports = sequelize;

module.exports = models;