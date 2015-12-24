var passport = require('passport');

module.exports = function (app) {

    //Get data repositories, so they can be passed to route definitions, so they can them or pass them to controllers.
    var dataRepositories = require('./../server/dataRepositories');

    //Get authentication controller and plug isLoggedIn function as a middleware for routes that require authentication
    var authController = require('./../server/controllers/Authentication/AuthenticationController')(passport);

    //Get route deinitions
    var routes = require('./../server/routes');
    var auth = require('./../server/routes/auth')(passport);

    //Basic app routes
    app.use('/', routes);
    app.use('/auth', auth);

    //Middleware to check if user is authenticated
    app.use('/api/*', authController.isAuthenticated);

    //Middleware to check if user is admin
    app.use('/api/admin/*', authController.isAdmin);

    // Catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
};