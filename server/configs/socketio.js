/* jslint node: true todo: true nomen: true */


const http = require('http');
const passportSocketIo = require('passport.socketio');
const SocketIo = require('socket.io');

module.exports = (app, sessionStore) => {
  const socketServer = http.createServer(app);
  const io = SocketIo(socketServer);

  function onAuthorizeSuccess(data, accept) {
    /* jslint unparam: true */
    accept();
  }

  function onAuthorizeFail(data, message, error, accept) {
    /* jslint unparam: true */
    if (error) {
      accept(new Error(message));
    }
  }

  io.use(passportSocketIo.authorize({
    cookieParser, // the same middleware you registrer in express
    key: 'express.sid', // the name of the cookie where express/connect stores its session_id
    secret: 'session_secret', // the session_secret to parse the cookie
    store: sessionStore, // we NEED to use a sessionstore. no memorystore please
    success: onAuthorizeSuccess, // *optional* callback on success - read more below
    fail: onAuthorizeFail, // *optional* callback on fail/error - read more below
  }));

  io.on('connection', () => {

  });
  return io;
};
