'use strict';
//TODO this controller should return error and result to a callback in all its functions. Routing related manipulations should happen in route handler functions and not here.
var bluebird = require('bluebird'),
    userUtils = require('./../../utilities/userUtilities.js');

var AuthenticationController = function (passport) {

    function logout (req, res) {
        req.logout();
        res.json({
            success: true,
            user: ''
        });
    }

    //Return user to front end
    function isLoggedIn (req, res, next) {
        if (req.user) {
            res.json({
                success: true,
                user: req.user
            });
        } else {
            res.json({
                success: false,
                user: ''
            });
        }

    }

    //Middleware function for routes, to check if user is logged in
    function isAuthenticated (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.sendStatus(403);
        }
    }

    //Middleware function for routes, to check if user is admin
    function isAdmin (req, res, next) {
        if (req.user.roles.indexOf('admin')) {
            return next();
        } else {
            res.sendStatus(403);
        }
    }

    // Local login
    function login (req, res, next) {
        passport.authenticate('local-login', function (error, user, info) {
            if (error) {
                res.status(403).send(error);
                return;
            }

            req.logIn(user, function (error) {
                if (error) {
                    res.status(403).send(error);
                    return;
                }
                //TODO this is not supposed to return raw user data getPublicUser should happen somewhere deeper
                res.json({
                    user: userUtils.getPublicUser(user),
                    info: info
                });
            });

        })(req, res, next);
    }

    //Local-signup
    function signup (req, res, next) {
        passport.authenticate('local-signup', function (error, user, info) {
            if (error) {
                res.status(403).send(error);
                return;
            }
            //TODO this is not supposed to return raw user data getPublicUser should happen somewhere deeper
            res.json({
                user: userUtils.getPublicUser(user),
                info: info
            });
        })(req, res, next);
    }

    // OAuth callback
    function oauthCallback (strategy) {
        return function(req, res, next) {
            passport.authenticate(strategy, function(err, user) {
                if (err || !user) {
                    res.status(403).send(err);
                    return;
                }
                req.logIn(user, function (error) {
                    if (error) {
                        res.status(403).send(error);
                        return;
                    }
                    res.redirect('/');
                });
            })(req, res, next);
        };
    }

    function saveOAuthUserProfile (req, providerData) {
      //
    }

    return {
        isLoggedIn: isLoggedIn,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin,
        logout: logout,
        login: login,
        signup: signup,
        oauthCallback: oauthCallback,
        saveOAuthUserProfile: saveOAuthUserProfile
    }
};

module.exports = AuthenticationController;