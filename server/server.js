const config = require('config');

// Config passport and add strategies to it
require('./configs/passport')();

const sessionStore = require('./configs/sessionStore')();

// Config express
const app = require('./configs/express')(sessionStore);

// TODO enable socketio when needed
// Config the socketIO server
// require('./configs/socketio')(app, sessionStore);

// Add the routes to the app
require('./configs/routes')(app);

// Init the server
app.listen(config.get('server.port'), config.get('server.ip'), () => {
  console.log('====================== Configuration =========================');
  console.log('Environment: ', config.get('environment'));
  console.log('Port: ', config.get('server.port'));
  console.log('IP: ', config.get('server.ip'));
  console.log('Database connection string: ', 'test');
  console.log('==============================================================');
});

module.exports = app;
