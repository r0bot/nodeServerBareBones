/* jslint node: true todo: true */


const userUtils = require('./../../utilities/userUtilities.js');
const lodash = require('lodash');

const usersConfiguration = global.appConfig.controllersConfig.users;
const dataRepository = require(`./../../dataRepositories/${usersConfiguration.dataRepository.name}`);

module.exports = function () {
  // Check if data repository has user defined
  if (!dataRepository.users) {
    throw new Error(`Data repository ${usersConfiguration.dataRepository.name} has no users defined in it.`);
  }

  function getAll(done) {
    dataRepository.users.getAll()
      .then((users) => {
        const publicUsers = [];
        lodash.each(users, (user) => {
          publicUsers.push(userUtils.getPublicUser(user));
        });
        done(null, publicUsers);
      }, (error) => {
        done(error);
      });
  }

  function getById(id, done) {
    dataRepository.users.getById(id)
      .then((user) => {
        done(null, userUtils.getPublicUser(user));
      }, (error) => {
        done(error);
      });
  }

  function updateById(params, done) {
    if (!params.id) {
      return done(new Error('No user ID provided.'));
    }

    if (!params.propertiesToUpdate) {
      return done(new Error('No properties to update provided.'));
    }
    let updatesObject = params.propertiesToUpdate,
      id = params.id;

    dataRepository.users.updateById(id, updatesObject)
      .then((updatedUser) => {
        done(null, userUtils.getPublicUser(updatedUser));
      }, (error) => {
        done(error);
      });
  }

  function find(searchCriteria, searchOptions, done) {
    // TODO validate search criteria and options
    dataRepository.users.find(searchCriteria, searchOptions)
      .then((users) => {
        done(null, userUtils.getPublicUser(users));
      }, (error) => {
        done(error);
      });
  }

  function createUser(userData, done) {
    // TODO validate userData properties
    dataRepository.users.create(userData)
      .then((user) => {
        done(null, userUtils.getPublicUser(user));
      }, (error) => {
        done(error);
      });
  }

  function validateUserPassword(params, done) {
    // to do parameters validation
    if (!params.username) {
      return done(new Error('No username specified!'));
    }
    if (!params.password) {
      return done(new Error('No password provided!'));
    }


    dataRepository.users.find({ username: params.username }, { singleResult: true })
      .then((user) => {
        userUtils.validateUserPasswordByModel(user, (error, isPasswordValid) => {
          if (error) {
            done(error);
          }
          done(null, { user: userUtils.getPublicUser(user), isPasswordValid });
        });
      }, (error) => {
        done(error);
      });
  }

  return {
    find,
    getAll,
    getById,
    createUser,
    updateById,
    validateUserPassword,
  };
};

