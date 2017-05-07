myApp.controller('SpotlightController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');
  var spotlight = this;
  spotlight.feature = {};
  spotlight.activeResults = {};
  spotlight.editing = false;
  spotlight.userObject = ClubService.userObject;


//Retrieves ACTIVE spotlight books from db


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
    var id = book.FeaturedBookID;
    console.log(id);
    $http.delete('/spotlights/' + id).then(function(response) {
      console.log("Deletes " + id);
      spotlight.getSpotlight();
    });
  };

  //Displays edit form with selected book info
  spotlight.showEditForm = function(book) {
    console.log('edit button clicked');
    spotlight.editing = true;
    console.log(book);
    spotlight.feature.book = angular.copy(book);
  };

  //Cancels edit
  spotlight.cancelEdit = function() {
    // console.log('cancel clicked');
    spotlight.editing = false;
  };

  //Edits a spotlight book
  spotlight.editSpotlight = function() {
    console.log(spotlight.feature.book);
    var book = spotlight.feature.book;
    $http.put('/spotlights', book).then(function(response) {
      console.log('Saves Edits ', book);
      spotlight.getSpotlight();
      spotlight.editing = false;
    });
  };

}]); //End of Controller
