myApp.controller('SpotlightController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');
  var spotlight = this;

  spotlight.userObject = ClubService.userObject;

  
}]);
