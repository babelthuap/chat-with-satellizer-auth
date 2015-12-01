'use strict';

angular.module('socialLogin')
.controller('homeCtrl', function($scope, $auth) {

  $scope.logout = function(provider) {
    $auth.logout();
  };

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  }

});