'use strict';

//This must always be the first thing called when initiating the server as it sets needed root properties creates folder and so on.
var config = require('./config/config');

//Init mongooose
require('./config/mongoose');

//Config passport and add strategies to it
require('./config/passport')();

var sessionStore = require('./config/sessionStore')();

//Config express
var app = require('./config/express')(sessionStore);
//Config the socketIO server
var socketIo = require('./config/express')(app, sessionStore);

//Start socket io
socketIo.listen(config.socketIO.port);

//Add the routes to the app
require('./config/routes')(app);

//Init the server
app.listen(config.port, config.ip, function () {
    console.log('====================== Configuration =========================');
    console.log('Environment: ', config.environment);
    console.log('Port: ', config.port);
    console.log('IP: ', config.ip);
    console.log('Database connection string: ', config.db);
    console.log('==============================================================');
});

module.exports = app;
