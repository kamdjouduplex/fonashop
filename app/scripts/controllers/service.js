'use strict';
/**
 * @ngdoc function
 * @name mymarketApp.controller:ServiveCtrl
 * @description
 * # ServiveCtrl
 * Controller of the mymarketApp
 */
  mymarketApp.controller('ServiceCtrl', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });
