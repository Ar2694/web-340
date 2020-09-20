/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By Arlix Sorto
; Modified Date: 9/20/2020
; Description: Mocha and Chai
;===========================================
*/
var fruits = require("../sorto-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});
