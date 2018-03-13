const Sequelize = require('sequelize');
const config = require('config');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const userUtils = require('./UserUtils');

let sequelize = null;

// TODO fix this to use config and not hardocded props
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
  storage: './storage/database.sqlite',
});

const users = require('./UserModel')(sequelize);

const userValidationSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30)
    .required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email().required()
});

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
  return { error, result };
}

async function getById(userId) {
  let error;
  let result;
  try {
    const usersData = await users.findOne({ where: { id: userId } });
    result = usersData.get({
      plain: true
    });
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return { error, result };
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
  return { error, result };
}

async function createUser(userData) {
  let error;
  let result;
  const { validationError, validatedUser } = Joi.validate(userData, userValidationSchema);
  if (validationError) {
    return { error: validationError, result: null };
  }
  try {
    const hashedPassword = await bcrypt.hash(userData.password, config.get('bcrypt.saltRounds'));
    // Overwrite the password with the hashed one
    validatedUser.password = hashedPassword;
    const createdUser = await users.create(validatedUser);
    result = userUtils.getPublicUser(createdUser.dataValues);
  } catch (err) {
    // TODO throw custom error
    error = err;
  }

  return { error, result };
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
      return { error };
    }
    const isPasswordValid = await bcrypt.compare(password, userData.password);
    if (!isPasswordValid) {
      error = new Error('Wrong password.');
      return { error };
    }
    result = userData.dataValues;
  } catch (err) {
    // TODO throw custom error
    error = err;
  }
  return { error, result };
}

module.exports = {
  getAll,
  getById,
  getByUsername,
  createUser,
  validateUserPassword,
};
