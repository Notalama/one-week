(function () {

    'use strict';

    angular.module('app').config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/', {
                template: 'main-component'
            }).
            otherwise('/');
        }
    ]);
})();