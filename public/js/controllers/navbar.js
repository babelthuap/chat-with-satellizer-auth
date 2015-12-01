'use strict';

angular.module('socialLogin')
.controller('navbarCtrl', function($scope, $auth) {

  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  }

});