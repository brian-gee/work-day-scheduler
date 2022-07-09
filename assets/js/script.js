var d = new Date();
var day = d.getDay();
var month =  d.getMonth();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

todaysDate = dayList[day] + ", " + monthList[month] + " " + d.getUTCDate();
dateDisplay = document.querySelector("#currentDay")

dateDisplay.innerHTML = todaysDate;