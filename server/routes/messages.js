var express = require('express');
var router = express.Router();
var path = require('path');

var connection = require('../modules/connection');
var pg = require('pg');

router.post('/', function(req, res) {

  var saveMessage = {
    MemberID: req.body.memberId,
    text: req.body.text,
    date: new Date()
  };
  console.log('New Message:', saveMessage);

  pg.connect(connection, function(err, client, done) {
    if(err) {
      done();
      console.log('Error connecting: ', err);
      res.sendStatus(500);
    }
    client.query('INSERT INTO messages ("MemberID", "Message", "date")' +
                  'VALUES ($1, $2, $3) RETURNING "MessageID"',
  [saveMessage.MemberID, saveMessage.text, saveMessage.date],
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
