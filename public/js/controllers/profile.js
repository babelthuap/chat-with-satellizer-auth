'use strict';

angular.module('socialLogin')
.controller('profileCtrl', ['$scope', '$auth', '$state', '$http', 'dataSvc', function($scope, $auth, $state, $http, dataSvc) {
  if (!$auth.isAuthenticated()) return $state.go('home');

  $scope.user = dataSvc.user;
  $scope.users;
  $scope.conversations;

  if (!$scope.user) {
    dataSvc.getCurrentUser()
    .then(res => {
      $scope.user = res.data;
      dataSvc.user = res.data;
    })
    .catch(err => console.error(err));
  }

  dataSvc.getOtherUsers()
  .then(res => $scope.users = res.data)
  .catch(err => console.error(err));

  dataSvc.getAllConversations()
  .then(res => {
    console.log('res.data:', res.data);
    $scope.conversations = res.data;
  })
  .catch(err => console.error(err));

  console.log('profileCtrl');
}]);
