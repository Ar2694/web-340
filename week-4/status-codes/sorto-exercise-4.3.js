/*

Title: Exercise 4.3 - HTTP Status Codes
Author: Arlix Sorto
Date: 8/26/2020
Modified:
Description: HTTP Status Codes

*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(req,res){
 res.status(404);
 

    res.json({
        status: "404",
        error:" Page not found!"
   
    });
});

app.get("/ok", function(req,res){
    res.status(200);
    
   
       res.json({
           status: "200",
           message:"Hello World!"
      
       });
   });

   app.get("/not-implemented", function(req,res){
    res.status(501);
    
   
       res.json({
           status: "501",
           message:"Page is not implemented!"
      
       });
   });

http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080");
})