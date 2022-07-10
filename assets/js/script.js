// Code to display current date using moment
var m = moment();
var currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = m.format("dddd, MMMM Do");