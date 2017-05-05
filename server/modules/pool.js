
var pg = require('pg');

//@TODO update pool config for Heroku deployment

var config = {
  user: 'betsyrowley', //env var: PGUSER
  database: 'the_club', //env var: PGDATABASE
  password: '', //env var: PGPASSWORD
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 1500, // 1.5s // how long a client is allowed to remain idle before being closed
};

//this initializes a connection pool
//it will keep idle connections open for a 30 seconds
//and set a limit of maximum 10 idle clients
var pool = new pg.Pool(config);

module.exports = pool;
