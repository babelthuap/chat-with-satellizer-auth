"use strict";var app=angular.module("socialLogin",["satellizer","ui.router"]);app.config(["$stateProvider","$urlRouterProvider","$authProvider",function(t,n,e){n.otherwise("/"),t.state("home",{url:"/",templateUrl:"partials/home.html"}).state("login",{url:"/login",templateUrl:"partials/login.html",controller:"loginCtrl"}).state("profile",{url:"/profile",templateUrl:"partials/profile.html",controller:"profileCtrl"}).state("conversation",{url:"/conversation/:id",templateUrl:"partials/conversation.html",controller:"conversationCtrl"}),e.github({clientId:"1d0fece5c7cc2db2b3b4"}),e.google({clientId:"167830915916-66jqfp5n2p922m33hu8rdn87apmjn4el.apps.googleusercontent.com"})}]),angular.module("socialLogin").service("dataSvc",["$http",function(t){var n=this;this.user,this.getCurrentUser=function(){return t.get("/users/me")},this.getOtherUsers=function(){return t.get("/users")},this.getConversationById=function(n){return t.get("/conversations/"+n)},this.getAllConversations=function(){return t.get("/conversations")},this.startConversationWith=function(e){return t.post("/conversations",{participants:[n.user._id,e],message:"Hi!"})},this.postMessage=function(n,e){return t.post("/conversations/"+n,{message:e})}}]),angular.module("socialLogin").controller("conversationCtrl",["$scope","$auth","$state","$stateParams","dataSvc",function(t,n,e,o,r){function a(){r.getConversationById(o.id).then(function(n){t.conversation=n.data,t.participants[n.data.participants[0]._id]=n.data.participants[0].displayName,t.participants[n.data.participants[1]._id]=n.data.participants[1].displayName})["catch"](function(t){return console.error(t)})}return n.isAuthenticated()?(t.conversation,t.participants={},a(),t.postMessage=function(t){t&&r.postMessage(o.id,t).then(function(t){e.newMessage="",a()})["catch"](function(t){return console.error(t)})},void(t.displayTime=function(t){return moment(t).fromNow()})):e.go("home")}]),angular.module("socialLogin").controller("loginCtrl",["$scope","$auth","$state",function(t,n,e){t.authenticate=function(t){n.authenticate(t).then(function(t){console.log("response:",t),e.go("profile")})["catch"](function(t){console.error("error:",t)})}}]),angular.module("socialLogin").controller("navbarCtrl",["$scope","$auth",function(t,n){t.isAuthenticated=function(){return n.isAuthenticated()},t.logout=function(t){n.logout()}}]),angular.module("socialLogin").controller("profileCtrl",["$scope","$auth","$state","$http","dataSvc",function(t,n,e,o,r){function a(){r.getAllConversations().then(function(n){t.conversations=n.data})["catch"](function(t){return console.error(t)})}return n.isAuthenticated()?(t.user=r.user,t.users,t.conversations,a(),t.user||r.getCurrentUser().then(function(n){t.user=n.data,r.user=n.data})["catch"](function(t){return console.error(t)}),r.getOtherUsers().then(function(n){return t.users=n.data})["catch"](function(t){return console.error(t)}),void(t.startConversationWith=function(n){r.startConversationWith(t.users[n]._id).then(a)["catch"](function(t){return console.error(t)})})):e.go("home")}]);