'use strict';

angular.module('users')
    .service('Identity', ['$cookieStore',
        function($cookieStore) {
            var identityService = {};

            identityService.cookieStorageUserKey = 'currentApplicationUser';

            identityService.currentUser = {};

            identityService.refreshUserFromCookie = function refreshUser () {
                var savedUser = $cookieStore.get(identityService.cookieStorageUserKey);
                if (savedUser) {
                    return  identityService.currentUser = savedUser;
                }

                identityService.currentUser = {};
            }

            identityService.getCurrentUser = function getCurrentUser () {
                var savedUser = $cookieStore.get(identityService.cookieStorageUserKey);
                if (savedUser) {
                    return savedUser;
                }

                identityService.currentUser;
            }

            identityService.setCurrentUser = function setCurrentUser (user) {
                if (user) {
                    $cookieStore.put(identityService.cookieStorageUserKey, user);
                }
                else {
                    $cookieStore.remove(identityService.cookieStorageUserKey);
                }

                identityService.currentUser = user;
            }

            identityService.isAuthenticated = function isAuthenticated () {
                return !!identityService.getCurrentUser();
            }

            identityService.isAdmin = function isAdmin () {
                return identityService.isInRole('admin');
            }

            identityService.isInRole = function isInRole (role) {
                var user = identityService.getCurrentUser();
                var inRole = false;

                if (user) {
                    var i = 0;
                    while (user.roles.length > i) {
                        var userRole = user.roles[i];

                        if (userRole === role) {
                            inRole = true;
                            break;
                        }

                        i++;
                    }
                }

                return inRole;
            }

            return identityService;
        }
    ]);
