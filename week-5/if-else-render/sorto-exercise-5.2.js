/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By Arlix Sorto
; Modified Date: 9/2/2020
; Description: EJS Templates
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname,"views"));

app.set("view engine", "ejs");

var arrName = ["Jerry", "John", "Arlix", "Kenny", "Tom"];

app.get("/", function(req,res){

res.render("index",{
  list_of_names: arrName,
});
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
})
