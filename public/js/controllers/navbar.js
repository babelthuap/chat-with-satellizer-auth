'use strict';

angular.module('socialLogin')
.controller('navbarCtrl', ['$scope', '$auth', function($scope, $auth) {

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  }

}]);
