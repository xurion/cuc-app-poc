//this will connect to a DB somewhere (probably mongodb referenced by mongo://db),
//fetch the price, then respond with it in JSON

//requirements: mongo client

var http = require('http');

http.createServer(function (req, res) {
    var html = 'this is mockapi';

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': html.length,
        'Expires': new Date().toUTCString()
    });
    res.end(html);
}).listen(3000);
