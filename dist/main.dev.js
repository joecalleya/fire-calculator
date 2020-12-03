"use strict";

// declare vars and calc method
var display = document.querySelector('#screen__display');
var salary = document.querySelector('#salary');
var expenses = document.querySelector('#expenses');
var savings = document.querySelector('#savings');
var interestRate = document.querySelector('#interestRate');

var refresh = function refresh() {
  location.refresh;
};

var calc = function calc() {
  var interestRateDecimal = interestRate.value / 100;
  var targetSavings = 25 * expenses.value;
  var yearlySaving = salary.value - expenses.value; //calculation for time to save from the internet

  var timeToSave = Math.round([1 / Math.log(1 + interestRateDecimal)] * [Math.log(yearlySaving + targetSavings * interestRateDecimal) - Math.log(yearlySaving + savings.value * interestRateDecimal)]); //return to display

  display.innerHTML = "";
  display.innerHTML += "<br> 30x expenses rule target savings:<span> \xA3".concat(targetSavings, "</span>");
  display.innerHTML += "<br> starting with  <span> \xA3".concat(savings.value, "</span>");
  display.innerHTML += "<br>by saving <span>\xA3".concat(yearlySaving, "</span> per year, at a rate of <span>").concat(interestRate.value, " % </span>");
  display.innerHTML += "<br> you can save this, in approximately <span>".concat(timeToSave, "</span> years");
};