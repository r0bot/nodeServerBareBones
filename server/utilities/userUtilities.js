
function getPublicUser(user) {
  // TODO add validation for missing user properties.
  // Mark mandatory ones and add default values to the others.
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    displayName: user.displayName,
    firstName: user.firstName,
    lastName: user.lastName,
    roles: user.roles,
    country: user.country,
    city: user.city,
    postalCode: user.postalCode,
    address: user.address,
    phoneNumber: user.phoneNumber,
  };
}

/**
 * @param userModel
 * @param {function} callback {Error|error.BaseError}
*/
function validateUserPasswordByModel(userModel, callback) {
  if (typeof userModel.validPassword === 'function') {
    callback(null, userModel.validPassword(userModel.password));
    return;
  }
  callback(new Error('User model is missing validPassword method.'));
}


module.exports = {
  validateUserPasswordByModel,
  getPublicUser,
};
