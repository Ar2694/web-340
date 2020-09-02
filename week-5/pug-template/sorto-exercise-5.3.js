/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By Arlix Sorto
; Modified Date: 9/2/2020
; Description: Pug Templates
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var app = express();

app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "pug");



app.get("/", function(req,res){

res.render("index",{
  custom_message: "Hello World! I'm using Pug as my template engine.",
});
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
})
