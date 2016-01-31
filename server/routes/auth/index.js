'use strict';

var passport = require('passport');
var express = require('express');
var router = express.Router();

module.exports = function (passport) {
    var AuthenticationController = require('./../../controllers/Authentication/AuthenticationController')(passport);

    //Route to check if user is logged in
    router.get('/', AuthenticationController.isLoggedIn);
    //logout route
    router.post('/login', AuthenticationController.login);
    //logout route
    router.get('/logout', AuthenticationController.logout);
    //register route
    router.post('/register', AuthenticationController.signup);

	return router;
};