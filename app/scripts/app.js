'use strict';

/**
 * @ngdoc overview
 * @name landingApp
 * @description
 * # landingApp
 *
 * Main module of the application.
 */
angular
  .module('landingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  

   
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/men', {
        templateUrl: 'views/men.html',
        controller: 'MenCtrl',
        controllerAs: 'men'
      })
      .when('/women', {
        templateUrl: 'views/women.html',
        controller: 'WomenCtrl',
        controllerAs: 'women'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
