'use strict';

/**
 * @ngdoc overview
 * @name mymarketApp
 * @description
 * # mymarketApp
 *
 * Main module of the application.
 */
var mymarketApp = angular.module('mymarketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  mymarketApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
