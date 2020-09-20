/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By Arlix Sorto
; Modified Date: 9/20/2020
; Description: TDD in Action
;===========================================
*/
var assert = require("assert");

describe("String#split", function(){

  it("should return an array of fruits", function(){

    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});
