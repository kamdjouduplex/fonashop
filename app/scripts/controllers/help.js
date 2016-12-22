'use strict';
/**
 * @ngdoc function
 * @name mymarketApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the mymarketApp
 */
mymarketApp.controller('HelpCtrl', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
