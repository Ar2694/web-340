/*
============================================
; Title: Exercise 8.4
; Author: Arlix Sorto
; Date: 26 September 2020
; Description: Milestone 4
;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var mongoose = require("mongoose");
var Employee = require("./models/employee");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

/*** Express use */
//Start the express app
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("port", process.env.PORT || 8080);
//Set Protections
var csrfProtection = csrf({ cookie: true });
app.use(helmet.xssFilter());
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;

  next();
});
//Use public directory
app.use(express.static(__dirname + "/public"));

//Use logger
app.use(logger("short"));

/***Express set */
//Set views path and view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//mLab connection
var mongoDB =
  "mongodb+srv://admin:admin@buwebdev-cluster-1.vumob.mongodb.net/ems?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

//GET requests
app.get("/", function (req, res) {
  res.render("index", {
    title: "Home page",
    active: "home",
  });
});

app.get("/new", function (req, res) {
  res.render("new", {
    title: "New page",
    active: "new",
  });
});

app.get("/list", function (req, res) {
  Employee.find({}, function (error, employees) {
    if (error) {
      throw error;
    }

    res.render("list", {
      title: "View page",
      active: "view",
      employees: employees,
    });
  });
});

app.get("/view/:firstName/:lastName/:email", function (req, res) {
  var firstName = req.params.firstName || "";
  var lastName = req.params.lastName || "";
  var email = req.params.email || "";
  console.log(firstName);
  Employee.find({
    "firstName":firstName,
    "lastName": lastName,
    "email": email
  }, function (error, employee) {
    if (error) {
      throw error;
    }
    console.log(employee);
    res.render("view", {
      title: "View page",
      active: "view",
      employee: employee,
    });
  });
});
//POST request
app.post("/process", function (req, res) {
  console.log(req.body);

  if (!req.body.firstName && !req.body.lastName && !req.body.email) {
    res
      .status(400)
      .send("Entries must have a first name, last name, and email.");
    return;
  }

  var first_name = req.body.firstName;
  var last_name = req.body.lastName;
  var _email = req.body.email;

  //create employee model
  var employee = new Employee({
    firstName: first_name,
    lastName: last_name,
    email: _email,
  });

  //save
  employee.save(function (error) {
    if (error) {
      throw error;
    }
    console.log(first_name + " saved succesfully!");
  });

  res.redirect("/list");
});

//Create server
http.createServer(app).listen(app.get("port"), function () {
  console.log("Application started on port" +app.get("port"));
});
