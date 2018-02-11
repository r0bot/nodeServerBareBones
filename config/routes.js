/* jslint node: true todo: true nomen: true */


module.exports = (app) => {
  // Get authentication controller and plug isLoggedIn function as a middleware for routes that require authentication
  let authController = require('../server/Authentication/index')(),
    // Get route definitions
    routes = require('./../server/routes'),
    auth = require('./../server/routes/auth')(),
    users = require('./../server/routes/api/users')();

    // Basic app routes
  app.use('/', routes);
  app.use('/auth', auth);

  // Middleware to check if user is authenticated
  app.use('/api/*', authController.isAuthenticated);
  app.use('/api/users', users);

  // Middleware to check if user is admin
  app.use('/api/admin/*', authController.isAdmin);

  // Catch 404 and forward to error handler
  app.use((req, res, next) => {
    /* jslint unparam: true */
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};
