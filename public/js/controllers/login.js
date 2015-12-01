'use strict';

angular.module('socialLogin')
.controller('loginCtrl', ['$scope', '$auth', '$state', function($scope, $auth, $state) {

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(res => $state.go('profile'))
    .catch(err => console.error('error:', err))
  };

}]);
