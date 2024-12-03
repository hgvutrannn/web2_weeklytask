const http = require('http'); // Import Node.js core module
const server = http.createServer(function(req, res){ // check the URL of the current request
    if(req.url == '/') { // check the URL of the current request
        // set response header
        res.writeHead(200, {'Content-Type':'text/html'});
        // set response content
        res.write('<html><head><title>Tran Hoang Vu - GCS220851</title></head><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><head><title>Tran Hoang Vu - GCS220851</title><body><p>This is student Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><head><title>Tran Hoang Vu - GCS220851</title><body><p>This is admin Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/data") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({title: "Tran Hoang Vu - GCS220851", message: "Helo World JSON"}));
        res.end();
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<html><head><title>Tran Hoang Vu - GCS220851</title></head></html>')
        res.end('Invalid Request!');
    }
})
server.listen(8000);
console.log('Node.js web server at port 8000 is running.');