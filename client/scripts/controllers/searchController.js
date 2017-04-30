myApp.controller('SearchController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');

  var search = this;
  search.userObject = ClubService.userObject;
  // search.logout = ClubService.logout;

  search.bookResults = {};

  search.findBook = function(book) {
      console.log(book);

    $http.get('/search/' + book).then(function(response) {

    // $http.get('http://openlibrary.org/search.json?title=' + book).then(function(response) {
    // console.log(response);
    // console.log(response.data.docs);

    search.bookResults.array = response.data.docs;
    console.log(search.bookResults);
  });
};

search.items = [
  'The first choice',
  'And another choice for you',
  'but wait! A Third!'
];

search.status = {
  isopen: false
};

search.toggled = function(open) {
  console.log('Dropdown is now: ', open);
};

search.toggleDropdown = function($event) {
  $event.preventDefault();
  $event.stopPropagation();
  $event.status.isopen = !search.status.isopen;
};

search.appendtoEl = angular.element(document.querySelector('#dropdown-long-content'));

}]);
