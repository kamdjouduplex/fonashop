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
      .when('/for_sell', {
        templateUrl: 'views/for_sell.html',
        controller: 'ForSellCtrl',
        controllerAs: 'for_sell'
      })
      .when('/for_rent', {
        templateUrl: 'views/for_rent.html',
        controller: 'ForRentCtrl',
        controllerAs: 'for_rent'
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',
        controllerAs: 'service'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        controllerAs: 'help'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
