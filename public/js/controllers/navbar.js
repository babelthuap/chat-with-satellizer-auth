'use strict';

angular.module('socialLogin')
.controller('navbarCtrl', ['$scope', '$auth', function($scope, $auth) {

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  }

  $scope.logout = function(provider) {
    $auth.logout();
  };

}]);
