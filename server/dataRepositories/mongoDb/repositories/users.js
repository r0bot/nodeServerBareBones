const User = require('../models/User');

function getAll(callback) {
  User.find({}, callback);
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

function createUser(userData, done) {
  const newUser = new User({
    username: userData.username,
    provider: userData.provider,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    firstName: userData.firstName,
    lastName: userData.lastName,
    displayName: `${userData.firstName} ${userData.lastName}`,
    city: userData.city,
    country: userData.country,
    postalCode: userData.postalCode,
    address: userData.address,
  });

  newUser.password = newUser.generateHash(password);

  if (userData.roles) {
    newUser.roles = userData.roles;
  }

  newUser.save((error) => {
    if (error) {
      done(error);
    }

    return done(null, newUser, { message: 'Sign up succeeded!' });
  });
}

function find(searchCriteria, searchOptions) {
  const deferred = bluebird.defer();

  if (searchOptions.singleResult) {
    User.findOne(searchCriteria, (error, user) => {
      if (error) {
        deferred.reject(error);
        return deferred.promise;
      }

      deferred.resolve(user);
    });
  } else {
    User.find(searchCriteria, (error, user) => {
      if (error) {
        deferred.reject(error);
        return deferred.promise;
      }

      deferred.resolve(user);
    });
  }

  return deferred.promise;
}

module.exports = {
  name: 'users',
  data: {
    find,
    getAll,
    getById,
    getByTwitterID,
    createUser,
    updateById,
    removeById,
    removeAll,
  },
};
