/* jslint node: true todo: true */


const express = require('express');

const router = express.Router();
const UsersController = require('./../../controllers/Users/UsersController')();

function getAllUsers(req, res) {
  /* jslint unparam: true */
  UsersController.getAll((error, users) => {
    if (error) {
      res.json(error);
    }
    res.json(users);
  });
}

function createUser(req, res) {
  const userData = req.body;

  UsersController.createUser(userData, (error, createdUser) => {
    if (error) {
      res.json(error);
    }
    res.json(createdUser);
  });
}

/**
 * @param req
 * @param res
 */
function getUserById({ params: { id }, body }, res) {
  const params = {
    id,
    propertiesToUpdate: body,
  };

  UsersController.updateById(params, (error, user) => {
    if (error) {
      res.json(error);
    }
    res.json(user);
  });
}

/**
 * @param req
 * @param res
 */
function updateUser({ params: { id } }, res) {
  UsersController.getById(id, (error, user) => {
    if (error) {
      res.json(error);
    }
    res.json(user);
  });
}
router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser);

module.exports = router;
