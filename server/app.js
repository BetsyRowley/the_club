//Base Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('./strategies/user_sql.js');
var session = require('express-session');

//Database Module

//Route Modules
var index = require('./routes/index.js');
var user = require('./routes/user.js');
var register = require('./routes/register.js');
var search = require('./routes/search.js');
var spotlights = require('./routes/spotlights.js');
var messages = require('./routes/messages.js');

//App Config
app.set('port', process.env.PORT || 8000);

//Middleware Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Serve back static files
app.use(express.static('server/public'));

// Passport Session Configuration //
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: {maxage: 600000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/register', register);
app.use('/user', user);
app.use('/search', search);
app.use('/spotlights', spotlights);
app.use('/messages', messages);
app.use('/', index);

//Listen
app.listen(app.get('port'), function() {
  console.log('Server listening on port: ', app.get('port'));
});
