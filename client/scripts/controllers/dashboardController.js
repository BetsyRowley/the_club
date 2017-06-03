myApp.controller('DashboardController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  // console.log('checking user');

  var dashboard = this;
  dashboard.userObject = ClubService.userObject;
  dashboard.message = {};
  dashboard.allMessages = {};

//GET all messages
dashboard.getMessages = function() {
  $http.get('/messages').then(function(response) {
    dashboard.allMessages.array = response.data;
    // console.log('Messages back from db: ', dashboard.allMessages.array);
  });
}; //Ends GET request


  //POSTs new message
  dashboard.postMessage = function() {
    dashboard.message.memberId = dashboard.userObject.id;
    // console.log(dashboard.message);
    $http.post('/messages', dashboard.message).then(function(response) {
      // console.log(response);
      dashboard.message = {};
      dashboard.getMessages();
    });

  }; //ends POST request


  //GETs all messages

}]);
