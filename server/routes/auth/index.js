/* jslint node: true todo: true */
const express = require('express');

const router = express.Router();
const AuthenticationController = require('../../Authentication/index')();

function login(req, res) {
  AuthenticationController.login(req, res, (error, user) => {
    if (error) {
      res.status(403).send(error);
      return;
    }
    res.json(user);
  });
}

function logout(req, res) {
  AuthenticationController.logout(req, res, (error, result) => {
    if (error) {
      res.status(403).send(error);
      return;
    }
    res.json(result);
  });
}

// Route to check if user is logged in
router.get('/', AuthenticationController.isLoggedIn);
// logout route
router.post('/login', login);
// logout route
router.get('/logout', logout);
// register route
router.post('/register', AuthenticationController.signup);

module.exports = router;
