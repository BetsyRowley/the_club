myApp.factory('ClubService', ['$http', '$location', function($http, $location){
  // console.log('Club Service loaded.');

  var userObject = {};

  return {
    userObject : userObject,

    getuser : function(){
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a current session on the server
              userObject.userName = response.data.username;
              userObject.first = response.data.first;
              userObject.id = response.data.id;
              userObject.image = response.data.image;
              // console.log('User Data: ', userObject.userName);
          } else {
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      });
    },

    logout : function() {
        $http.get('/user/logout').then(function(response) {
          // console.log('logged out');
          $location.path("/home");
        });
    }
  };
}]);
