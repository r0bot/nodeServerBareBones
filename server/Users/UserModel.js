const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
  });
  User.sync();
  return User;
};
