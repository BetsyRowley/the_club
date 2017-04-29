myApp.controller('DashboardController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');

  var dashboard = this;

  dashboard.userObject = ClubService.userObject;
  dashboard.logout = ClubService.logout;
}]);
