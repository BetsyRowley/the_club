var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);
/// Routes ///

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: "LoginController",
      controllerAs: 'login'
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: "LoginController",
      controllerAs: 'login'
    })
    .when('/dashboard', {
      templateUrl: '/views/templates/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/spotlight', {
      templateUrl: '/views/templates/spotlight.html',
      controller: 'SpotlightController',
      controllerAs: 'spotlight',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/archive', {
      templateUrl: '/views/templates/archive.html',
      controller: 'ArchiveController',
      controllerAs: 'archive',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/nightstand', {
      templateUrl: '/views/templates/nightstand.html',
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      resolve: {
        getuser : ['ClubService', function(ClubService){
          return ClubService.getuser();
        }]
      }
    })
    .when('/search', {
      templateUrl: '/views/templates/search.html',
      controller: 'SearchController',
      controllerAs: 'search',
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
