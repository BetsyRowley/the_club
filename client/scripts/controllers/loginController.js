myApp.controller('LoginController', ['$http', '$location', 'ClubService',
      function($http, $location, ClubService) {

    var login = this;

    login.user = {
      username: '',
      password: '',
      first: '',
      last: ''
    };
    login.message = '';

    login.login = function() {
      if(login.user.username === '' || login.user.password === '') {
        login.message = "Enter your username and password!";
      } else {
        console.log('sending to server...', login.user);
        $http.post('/', login.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            console.log('redirecting to user page');
            $location.path('/dashboard');
          } else {
            console.log('failure: ', response);
            login.message = "Either your email or password were incorrect, please try again!";
          }
        });
      }
    };

    login.registerUser = function() {
      if(login.user.username === '' || login.user.password === '' ||
          login.user.first === '' || login.user.last === '') {
        login.message = "Please complete all fields!";
      } else {
        console.log('sending to server...', login.user);
        $http.post('/register', login.user).then(function(response) {
          console.log('success');
          $location.path('/home');
        },
        function(response) {
          console.log('error');
          login.message = "Please try again.";
        });
      }
    };
}]);
