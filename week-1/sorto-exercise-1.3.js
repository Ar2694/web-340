var header = require('../header.js');
var url = require('url');

var parsedURL = url.parse("https://www.myWesbite.com/profile?name=smith");


/** Calls the display function and output the header*/
console.log(header.display("Arlix", "Sorto", "Exercise 1.3"));
console.log("");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);