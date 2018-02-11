import Sequelize from 'sequelize';

module.exports = sequelize => sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});
