myApp.controller('ArchiveController', ['$http', '$location', 'ClubService',
  function($http, $location, ClubService) {


    var archive = this;
    archive.userObject = ClubService.userObject;
    archive.allBooks = {};

    //GETs all Books in Archive
    archive.getArchive = function() {
      $http.get('/archive').then(function(response) {
        archive.allBooks.array = response.data;
        console.log("Archive from db: ", archive.allBooks);
      });
    }; //End of GET request

  }
]);
