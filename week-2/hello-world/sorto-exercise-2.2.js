/*

Title: Exercise 2.2 – Hello World with Express
Author: Arlix Sorto
Date:8/12/2020
Modified:
Description: Hello World with Express

*/


var express = require("express");
var http = require("http");
var app = express();

app.use(function(req, res){
console.log("In comes a request to: " + req.url);
res.end("Hello World");

});

http.createServer(app).listen(8080);