'use strict';
/**
 * @ngdoc function
 * @name mymarketApp.controller:ForRentCtrl
 * @description
 * # ForRentCtrl
 * Controller of the mymarketApp
 */
 mymarketApp.controller('ForRentCtrl', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });

