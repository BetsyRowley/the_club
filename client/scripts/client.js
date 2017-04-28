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
    .when('/dashboard', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'UserController',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/featuredbook', {
      templateUrl: '/views/templates/featuredbook.html',
      controller: 'FeaturedBookController',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/archive', {
      templateUrl: '/views/templates/archive.html',
      controller: 'UserController',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/nightstand', {
      templateUrl: '/views/templates/nightstand.html',
      controller: 'UserController',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/search', {
      templateUrl: '/views/templates/search.html',
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
