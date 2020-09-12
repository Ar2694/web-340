/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By Arlix Sorto
; Modified Date: 9/2/2020
; Description: Mongoose
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express();
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.vumob.mongodb.net/ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB,{
 useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error:"));
db.on("open", function () {
  console.log("Application to mLab MongoDB isntance");
  });


  app.use(logger('dev'));

  http.createServer(app).listen(8080, function(){
    console.log("Applcation started and listening on port 8080.")
  })


