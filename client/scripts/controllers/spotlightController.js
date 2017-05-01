myApp.controller('SpotlightController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');
  var spotlight = this;

  spotlight.userObject = ClubService.userObject;


//Retrieves ACTIVE spotlight books from db
  spotlight.activeResults = {};

  spotlight.getSpotlight = function() {
    console.log("client sent request for spotlight results");
      $http.get('/spotlights').then(function(response) {
          spotlight.activeResults.array = response.data;
          console.log('Active Spotlights from db: ', spotlight.activeResults.array);
      });
  };

  //Deletes a spotlight book from the db
  spotlight.deleteSpotlight = function(book) {
    console.log(book);
    var id = book.id;
    console.log(id);
    $http.delete('/spotlights/' + id).then(function(response) {
      console.log("Deletes " + id);
      spotlight.getSpotlight();
    });
  };

}]); //End of Controller
