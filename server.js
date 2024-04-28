const http = require ("http");

const port = 3000;

const hostname = '127. 0.0.1';

http.createServer(function (req,res) {
    res.statusCode = 200;
    res.setHeader('content-Type','text/html');
    res.write( 'This is Chiemerie Eziaghighala');
    res.end();
}) .listen (port);



