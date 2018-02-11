const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const users = require('./../Users');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    users.getById(id, (error, user) => {
      done(error, user);
    });
  });

  // Initialize the defined login strategies
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, ((req, username, password, done) => {
      const userData = req.body;
      process.nextTick(async () => {
        const [error, user] = await users.getByUsername(username);
        if (error) {
          return done(error);
        }

        if (user) {
          return done(null, false, { message: 'Username already exist!' });
        }

        userData.username = username;
        userData.provider = 'local';

        const [createUserError, createdUser] = await users.createUser(userData);
        if (createUserError) {
          throw error;
        }
        return done(null, createdUser, { message: 'Sign up succeeded!' });
      });
    })));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
  }, (async (req, username, password, done) => {
      const [error, user] = await users.validateUserPassword(username, password);
      if (error) {
        return done({ message: error.message });
      }
      return done(false, user, { message: 'Login succeeded!' });
    })));
};
