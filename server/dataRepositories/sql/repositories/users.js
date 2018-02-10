import Sequelize from 'sequelize';
import config from 'config';
import User from '../models/User';

const sequelize = new Sequelize(config.sqlDb.connectionString, config.sqlDb.oprions);

const users = new User(sequelize);

async function getAll() {
  return users.findAll();
}

function getByTwitterID(id) {
  const deferred = bluebird.defer();

  User
    .findOne({ twitterID: id }, (error, user) => {
      if (error) {
        deferred.reject(error);
      }

      deferred.resolve(user);
    });

  return deferred.promise;
}

function getById(id) {
  const deferred = bluebird.defer();

  User
    .findById(id, (error, user) => {
      if (error) {
        deferred.reject(error);
      }

      deferred.resolve(user);
    });

  return deferred.promise;
}

function createUser(params) {
  const deferred = bluebird.defer();
  const user = new User(params);

  user.save((error, savedUser) => {
    if (error) {
      deferred.reject(error);
      return;
    }

    deferred.resolve(savedUser);
  });

  return deferred.promise;
}

function updateById(id, updatesObject) {
  const deferred = bluebird.defer();

  User.findByIdAndUpdate(id, updatesObject, (error, updatedUser) => {
    if (error) {
      deferred.reject(error);
      return deferred.promise;
    }

    deferred.resolve(updatedUser);
  });

  return deferred.promise;
}

function removeById(id) {
  const deferred = bluebird.defer();

  return deferred.promise;
}

function removeAll() {
  // var deferred = bluebird.defer();

  // return deferred.promise;
}

module.exports = {
  getAll,
  getById,
  getByTwitterID,
  createUser,
  updateById,
  removeById,
  removeAll,
};
