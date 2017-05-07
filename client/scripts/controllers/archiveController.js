myApp.controller('ArchiveController', ['$http', '$location', 'ClubService',
  function($http, $location, ClubService) {


  var archive = this;
  archive.userObject = ClubService.userObject;

  }
]);
