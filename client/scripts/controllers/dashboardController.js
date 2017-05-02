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
    dashboard.message.timestamp = Date.now();
    dashboard.message.id = dashboard.userObject.id;
    console.log(dashboard.message

    $http.post('/messages')  


  }; //ends POST request


  //GETs all messages

}]);
