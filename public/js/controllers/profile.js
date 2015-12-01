'use strict';

angular.module('socialLogin')
.controller('profileCtrl', ['$scope', '$auth', '$state', '$http', 'dataSvc', function($scope, $auth, $state, $http, dataSvc) {
  if (!$auth.isAuthenticated()) return $state.go('home');

  $scope.user = dataSvc.user;
  $scope.users;
  $scope.conversations;

  getAllConversations();

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

  function getAllConversations() {
    dataSvc.getAllConversations()
    .then(res => {
      $scope.conversations = res.data;
    })
    .catch(err => console.error(err));
  }

  $scope.startConversationWith = index => {
    dataSvc.startConversationWith($scope.users[index]._id)
    .then(getAllConversations)
    .catch(err => console.error(err));
  }

}]);
