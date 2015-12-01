'use strict';

angular.module('socialLogin')
.controller('loginCtrl', function($scope, $auth, $state) {

  $scope.authenticate = function(provider) {
    $auth.authenticate(provider)
    .then(function(res) {
      console.log('response:', res);
      $state.go('home');
    })
    .catch(function(err) {
      console.error('error:', err);
    })
  };

});