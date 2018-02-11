const config = require('config');

// Config passport and add strategies to it
require('./server/configs/passport')();

const sessionStore = require('./server/configs/sessionStore')();

// Config express
const app = require('./server/configs/express')(sessionStore);
// Config the socketIO server
require('./server/configs/socketio')(app, sessionStore);

// Add the routes to the app
require('./server/configs/routes')(app);

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
