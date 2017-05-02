myApp.controller('DashboardController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {
  // This happens after view/controller loads -- not ideal but it works for now.
  console.log('checking user');

  var dashboard = this;
  dashboard.userObject = ClubService.userObject;
  dashboard.message = {};



  //POSTs new message
  dashboard.postMessage = function() {
    console.log(dashboard.message);
    // dashboard.message.timestamp = Date.now();
    dashboard.message.memberId = dashboard.userObject.id;
    console.log(dashboard.message);

    $http.post('/messages', dashboard.message).then(function(response) {
      console.log(response);
      dashboard.message = {};
    });


  }; //ends POST request


  //GETs all messages

}]);
