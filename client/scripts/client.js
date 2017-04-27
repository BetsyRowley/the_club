var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: "LoginController"
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: "LoginController"
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
