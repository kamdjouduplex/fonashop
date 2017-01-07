'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the landingApp
*/
 angular.module('landingApp')
.factory('Auth', function($firebaseAuth){
    var Auth = $firebaseAuth();

    return Auth;
})

  .config(function() {
  var config = {
    apiKey: "AIzaSyA4ePrt_Muw_57wZX_LeVN-fBIhJ5Gm3Y8",
    authDomain: "fonashop-c41d2.firebaseapp.com",
    databaseURL: "https://fonashop-c41d2.firebaseio.com",
    storageBucket: "fonashop-c41d2.appspot.com",
    messagingSenderId: "1078149696865"
  };
  firebase.initializeApp(config);
})

.controller("AuthCtrl", ["$scope", "Auth", function($scope,Auth) {
  
     this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 $scope.authData = Auth.$getAuth();
$scope.user = {
      email: "carlcollins@gmail.com",
      password: "nghacker"
};
$scope.login = function (){
  Auth.$signInWithEmailAndPassword($scope.user).then(function (Auth){
 console.log(firebaseUser.uid);
  } ,  function (error){
    $scope.error = error;
   }
  );
};  

$scope.signup = function (){
  Auth.$createUserWithEmailAndPassword($scope.user).then(function (Auth){
 console.log(firebaseUser.uid);
  }, function (error){
    $scope.error = error;
  });
}; 
}]);

 