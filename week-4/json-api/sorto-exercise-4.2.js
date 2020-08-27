/*

Title: Exercise 4.2 - JSON APIs
Author: Arlix Sorto
Date: 8/26/2020
Modified:
Description: JSON APIs

*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/user/:id", function(req,res){
    var id = parseInt(req.params.id,10);

    res.json({
        userId: id,
        city:"Omaha",
        state: "NE",
        zip: "68144",
   
    });
});

http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080");
})