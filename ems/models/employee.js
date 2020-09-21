/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified By: Arlix Sorto
; Description: File for the Employee database model
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});
var Employee = mongoose.model('Employee', EmployeeSchema);

// Export the model so its publicly available.
module.exports = Employee;
