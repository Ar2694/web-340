/*

Title: Exercise 2.3 - Routes
Author: Arlix Sorto
Date:8/12/2020
Modified:
Description: Routes

*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/",function(req,res){

    res.end("Welcome to the home page!");
});

app.get("/about",function(req, res){
    res.end("Welcome to the about page!");
});

app.get("/contact",function(req, res){
    res.end("Welcome to the contact page!");
});

app.use(function(req, res){
    res.statusCode = 404;
    res.end("404!");
});


http.createServer(app).listen(8080);