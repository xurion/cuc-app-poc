var http = require('http'),
MongoClient = require('mongodb').MongoClient;

http.createServer(function (req, res) {
    MongoClient.connect('mongodb://db/test', function (err, db) {

      if (err) {

          console.log(err);
      }

      var json = db.getCollection('price');

      res.writeHead(200, {
          'Content-Type': 'text/json',
          'Content-Length': json.length,
          'Expires': new Date().toUTCString()
      });
      res.end(json);
    });
}).listen(3000);
