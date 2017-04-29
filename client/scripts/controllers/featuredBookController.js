myApp.controller('FeaturedBookController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');
  var featured = this;

  featured.userObject = ClubService.userObject;
  // featured.logout = ClubService.logout;
}]);
