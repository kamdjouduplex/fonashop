'use strict';


var mymarketApp = angular.module('mymarketApp', [
    'ngRoute',
  ]);
  mymarketApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/for_rent', {
        templateUrl: 'views/for_rent.html',
        controller: 'ForRentCtrl'
      })
      .when('/for_sell', {
        templateUrl: 'views/for_sell.html',
        controller: 'ForSellCtrl',
      })
      .when('/service', {
        templateUrl: 'views/service.html',
        controller: 'ServiceCtrl',
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);// it will remove the #
  });
