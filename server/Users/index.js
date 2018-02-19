const Sequelize = require('sequelize');
const config = require('config');

const userUtils = require('./UserUtils');

let sequelize = null;
try {
  sequelize = new Sequelize('users', '', '', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    // SQLite only
    storage: './storage/data/database.sqlite',
  });
} catch (err) {
  console.log('chep');
}
// TODO fix this to use config and not hardocded props

const users = require('./UserModel')(sequelize);

async function getAll() {
  let error;
  let result;
  try {
    const usersData = await users.getAll();
    result = usersData.map(user => userUtils.getPublicUser(user));
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return [error, result];
}

async function getById(userMail) {
  let error;
  let result;
  try {
    const usersData = await users.findOne({ where: { id: userMail } });
    result = usersData.map(user => userUtils.getPublicUser(user));
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return [error, result];
}

async function getByUsername(username) {
  let error;
  let result;
  try {
    const userData = await users.findOne({ where: { username } });
    result = userData ? userUtils.getPublicUser(userData) : null;
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return [error, result];
}

async function createUser(userData) {
  // TODO validate userData properties
  let error;
  let result;
  try {
    const createdUser = await users.create(userData);
    result = userUtils.getPublicUser(createdUser.dataValues);
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return [error, result];
}

// TODO this function is a raw version of what it should be
// write it with proper checks and validations
async function validateUserPassword(username, password) {
  let error;
  let result;
  try {
    const userData = await users.findOne({ where: { username } });
    if (userData === null) {
      error = new Error('Username does not exist.');
      return [error];
    }
    if (userData.dataValues.password !== password) {
      error = new Error('Wrong password.');
      return [error];
    }
    result = userData.dataValues;
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return [error, result];
}

module.exports = {
  getAll,
  getById,
  getByUsername,
  createUser,
  validateUserPassword,
};
