var express = require('express');
var router = express.Router();
var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

router.post('/', function(req, res) {

  var saveMessage = {
    MemberID: req.body.id,
    text: req.body.text,
    timestamp: req.body.timestamp
  };
  console.log('New Message Saved:', saveMessage);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting: ', err);
      res.sendStatus(500);
    }
    client.query('INSERT INTO messages ("MemberID", "Message", "Timestamp")' +
                  'VALUES ($1, $2, $3) RETURNING "MessageID"',
  [saveMessage.MemberID, saveMessage.text, saveMessage.timestamp],
        function (err, result) {
          done();

          if(err) {
            console.log('Error inserting data: ', err);
            res.sendStatus(500);
          } else {
            res.sendStatus(201);
          }
        });
  });

}); //Ends POST request

module.exports = router;
