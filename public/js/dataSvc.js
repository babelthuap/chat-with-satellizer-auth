'use strict';

angular.module('socialLogin')
.service('dataSvc', ['$http', function($http) {

  this.user;

  this.getCurrentUser = () => $http.get('/users/me');
  this.getOtherUsers = () => $http.get('/users');

  this.getConversationById = id => $http.get(`/conversations/${id}`);
  this.getAllConversations = () => $http.get('/conversations');

  this.postMessage = (message, id) =>
    $http.post(`/conversations/${id}`, {message: message});

}]);
