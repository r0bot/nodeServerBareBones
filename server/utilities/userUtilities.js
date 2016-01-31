module.exports = function () {

    function getPublicUser(user) {
        return {
            id: user._id,
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
            phoneNumber: user.phoneNumber
        };
    }

    return {
        getPublicUser: getPublicUser
    }
}();