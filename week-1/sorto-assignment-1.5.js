var header = require('../header.js');
var http = require("http");

/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Assignment 1.5"));
console.log("");

function processRequest(req,res){
    var body = "Server running on port 8080";
    var contentLength = body.length;
    res.writeHead(200,{
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);