/*

Title: Exercise 3.2 - Logging
Author: Arlix Sorto
Date:8/20/2020
Modified:
Description: Logging

*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(req, res){
    res.render("index",{
        message:"Hello world, my name is Arlix!"
    })
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
