'use strict';

angular.module('socialLogin')
.controller('profileCtrl', ['$scope', '$auth', '$state', '$http', function($scope, $auth, $state, $http) {
  if (!$auth.isAuthenticated()) return $state.go('home');

  $scope.user;

  $http.get('/users/me')
  .then(function(user) {
    console.log(user.data);
    $scope.user = user.data;
  })
  .catch(function(err) {
    console.error(err);
  })

  console.log('profileCtrl');
}]);
