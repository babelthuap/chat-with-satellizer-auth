'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html' })
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl' })
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl' })

    $authProvider.github({
      clientId: '1d0fece5c7cc2db2b3b4'
    });

    $authProvider.google({
      clientId: '167830915916-66jqfp5n2p922m33hu8rdn87apmjn4el.apps.googleusercontent.com'
    });
}]);
