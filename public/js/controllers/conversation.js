'use strict';

angular.module('socialLogin')
.controller('conversationCtrl', ['$scope', '$auth', '$state', '$stateParams', 'dataSvc', function($scope, $auth, $state, $stateParams, dataSvc) {
  if (!$auth.isAuthenticated()) return $state.go('home');

  $scope.conversation;
  $scope.participants = {};

  dataSvc.getConversationById($stateParams.id)
  .then(res => {
    console.log("res:", res);
    $scope.conversation = res.data;

    $scope.participants[res.data.participants[0]._id] = res.data.participants[0].displayName;
    $scope.participants[res.data.participants[1]._id] = res.data.participants[1].displayName;

    console.log('$scope.participants:', $scope.participants);
  })
  .catch(err => console.error(err));

  $scope.displayTime = time => {
    return moment(time).format('MMMM Do YYYY, h:mm:ss a');
  };

  console.log('conversationCtrl with ID', $stateParams.id);
}]);
