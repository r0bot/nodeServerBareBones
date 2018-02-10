const mongoose = require('mongoose');
const config = require('./config');

// TODO fix this with log
module.exports = (() => {
  mongoose.connection
    .on('error', () => {
      console.log('Error occurred with the mongodb connection!');
    })
    .once('open', () => {
      console.log('MongoDB connection opened!');
    });
  mongoose.connect(config.db);
})();
