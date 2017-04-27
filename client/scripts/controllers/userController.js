myApp.controller('UserController', ['$scope', '$http', '$location', 'ClubService',
      function($scope, $http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');
  $scope.userObject = ClubService.userObject;
  $scope.logout = ClubService.logout;
}]);
