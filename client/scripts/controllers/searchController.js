myApp.controller('SearchController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');

  var search = this;
  search.userObject = ClubService.userObject;

  search.bookResults = {};

//Takes the title entered by user, searches Open Library Books API & returns results
  search.findBook = function(book) {
      console.log(book);
      $http.get('/search/' + book).then(function(response) {
      search.bookResults.array = response.data.docs;
      console.log(search.bookResults);
  });
};

//Posts book to db & takes use to the Spotlight view
search.addToSpotlight = function(book) {
  console.log(book);
  $http.post('/spotlights', book).then(function(response) {
    // console.log(response);
    //direct to /spotlight
    $location.path('/spotlight');
  });
};

}]);
