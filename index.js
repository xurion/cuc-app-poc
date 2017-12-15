var http = require('http');

http.createServer(function (req, res) {
    var html = '<!DOCTYPE html><html><header>This is the app!</header><body>Kthx</body></html>';

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': html.length,
        'Expires': new Date().toUTCString()
    });
    res.end(html);
}).listen(3000);
