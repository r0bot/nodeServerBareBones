'use strict';

var passport = require('passport');
var express = require('express');
var router = express.Router();
//TODO authentication controller should operate on error result to callback basis. remove routing logic from there and create function here to handle that.
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