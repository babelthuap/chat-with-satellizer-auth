'use strict';

angular.module('socialLogin')
.controller('profileCtrl', ['$scope', '$auth', '$state', '$http', 'dataSvc', function($scope, $auth, $state, $http, dataSvc) {
  if (!$auth.isAuthenticated()) return $state.go('home');

  $scope.user = dataSvc.user;
  $scope.users;

  if (!$scope.user) {
    dataSvc.getCurrentUser()
    .then(function(user) {
      $scope.user = user.data;
      dataSvc.user = user.data;
    })
    .catch(function(err) {
      console.error(err);
    })
  }

  dataSvc.getAllUsers()
  .then(function(users) {
    console.log("other users:", users);
    $scope.users = users.data;
  })
  .catch(function(err) {
    console.error(err);
  })

  console.log('profileCtrl');
}]);
