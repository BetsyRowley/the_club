myApp.controller('NavController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');

  var nav = this;
  // nav.userObject = ClubService.userObject;
  nav.logout = ClubService.logout;
}]);
