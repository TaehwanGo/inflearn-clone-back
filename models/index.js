const Sequelize = require('sequelize');
const user = require('./user');
const lecture = require('./lecture');
const image = require('./image');
const video = require('./video');
const review = require('./review');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = user;
db.Lecture = lecture;
db.Image = image;
db.Video = video;
db.Review = review;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
