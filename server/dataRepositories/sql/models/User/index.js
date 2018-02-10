import Sequelize from 'sequelize';

module.exports = (sequelize) => {
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    description: Sequelize.TEXT,
    deadline: Sequelize.DATE,
  });
  return User;
};
