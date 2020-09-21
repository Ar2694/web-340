/*
============================================
; Title: Exercise 6.4
; Author: Arlix Sorto
; Date: 13 September 2020
; Description: Milestone 2
;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
var mongoose = require("mongoose");
var Employee = require("./models/employee");

app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(logger("short"));

//mLab connection
var mongoDB = "mongodb+srv://admin:admin@buwebdev-cluster-1.vumob.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{
  useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console,"MongoDB connection error: "));
db.once("open",function(){
  console.log("Application connected to mLab MongoDB instance");
});

var employee = new Employee({
  firstName: "John",
  lastName: "Doe"
});



app.get("/", function(req, res){
  res.render("index" , {
    title: "Home page",
    homeActive: true,
    newActive: false,
    viewActive: false
  })
});


app.get("/view", function(req, res){
  res.render("view" , {
    title: "View page",
    homeActive: false,
    newActive: false,
    viewActive: true
  })
});

app.get("/new", function(req, res){
  res.render("new" , {
    title: "New page",
    homeActive: false,
    newActive: true,
    viewActive: false
  })
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
});
