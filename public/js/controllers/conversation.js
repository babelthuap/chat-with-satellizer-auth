'use strict';

angular.module('socialLogin')
.controller('conversationCtrl', ['$scope', '$auth', '$state', '$stateParams', 'dataSvc', function($scope, $auth, $state, $stateParams, dataSvc) {
  if (!$auth.isAuthenticated()) return $state.go('home');

  $scope.conversation;
  $scope.participants = {};

  getConversation();

  function getConversation() { 
  dataSvc.getConversationById($stateParams.id)
    .then(res => {
      $scope.conversation = res.data;
      $scope.participants[res.data.participants[0]._id] = res.data.participants[0].displayName;
      $scope.participants[res.data.participants[1]._id] = res.data.participants[1].displayName;
    })
    .catch(err => console.error(err));
  }

  $scope.postMessage = newMessage => {
    if (!newMessage) return;

    dataSvc.postMessage($stateParams.id, newMessage)
    .then(res => {
      $state.newMessage = '';
      getConversation();
    })
    .catch(err => console.error(err));
  }

  $scope.displayTime = time => moment(time).fromNow();
}]);
