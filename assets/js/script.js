// Display current date using moment
var m = moment();
var currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = m.format("dddd, MMMM Do");

// Add or remove class based on time
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach( (hour) => {
    blockToAssign = document.querySelector("#block-" + hour);
    classToAssign = ""
    currentHour = m.hour();

    if (hour < currentHour) {
        classToAssign = "past";
    } else if (hour > currentHour) {
        classToAssign = "future";
    } else {
        classToAssign = "present";
    }

    blockToAssign.classList.add(classToAssign);

    // Assign localstorage value to textarea if it exists
    if (localStorage["TextAreaData-" + hour]) {
        blockToAssign.value = window.localStorage["TextAreaData-" + hour];
    }    
})

// Make all saveBtn clickable and store textArea value to localstorage
for (var i = 9; i < 18; i++) {
    var saveBtn = document.querySelector("#btn-" + i);
    saveBtn.addEventListener("click", (e) => {
        var blockNum = e.target.id.substr(4);
        blockTextArea = document.querySelector("#block-" + blockNum);
      localStorage["TextAreaData-" + blockNum] = blockTextArea.value;
    });
}