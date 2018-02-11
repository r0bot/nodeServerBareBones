/* jslint node: true todo: true nomen: true */
/* globals */


const config = require('../../config/config');
const Sequelize = require('sequelize');
const session = require('express-session');
// initalize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

module.exports = function () {
  // create database, ensure 'sqlite3' in your package.json
  const sequelize = new Sequelize(
    config.sessionStore.database,
    config.sessionStore.username,
    config.sessionStore.password,
    {
      dialect: 'sqlite',
      storage: config.sessionStore.storagePath,
    },
  );

  const sessionStore = new SequelizeStore({
    db: sequelize,
  });

  sessionStore.sync();

  return sessionStore;
};
