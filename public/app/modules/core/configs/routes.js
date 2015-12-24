'use strict';

angular.module('core')
    .config(['$stateProvider', '$urlRouterProvider','$httpProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/core/views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'homeCtrl',

                })
        }
    ]);