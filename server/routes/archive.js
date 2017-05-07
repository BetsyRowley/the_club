var express = require('express');
var router = express.Router();
var path = require('path');

var pool = require('../modules/pool');

//GETs all messages
router.get('/', function(req, res) {

  pool.connect(function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting to database: ', err);
      res.sendStatus(500);
    } else {
    client.query('SELECT * FROM spotlight WHERE active = false ORDER by "FeaturedBookID";',
                  function(queryError, result) {
      done();
      if(queryError) {
        console.log('Error making query.');
        res.sendStatus(500);
      } else {
        // console.log(result);
        res.send(result.rows);
        }
      });
    }
  });
}); //Ends GET request

module.exports = router;
