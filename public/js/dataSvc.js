'use strict';

angular.module('socialLogin')
.service('dataSvc', ['$http', function($http) {

  this.user;

  this.getCurrentUser = () => $http.get('/users/me');
  this.getAllUsers = () => $http.get('/users');

}]);
