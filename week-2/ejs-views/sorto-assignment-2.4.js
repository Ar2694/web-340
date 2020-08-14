/*

Title: Assignment 2.4 - EJS Views
Author: Arlix Sorto
Date:8/13/2020
Modified:
Description: EJS Views

*/

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname,"views"));

app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("index",{
        firstName: "Arlix",
        lastName: "Sorto",
        address: "703 nebraska ave"
    })
});

http.createServer(app).listen(8080,function(){
    console.log("EJS-Views app started on port 8080.");
});

