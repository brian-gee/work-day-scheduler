// Code to display current date using moment
var m = moment();
var currentDay = document.querySelector("#currentDay");
currentDay.innerHTML = m.format("dddd, MMMM Do");

// Code to add or remove class based on time
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

hours.forEach( (hour) => {
    blockToAssign = document.querySelector("#block-" + hour);
    classToAssign = ""

    currentHour = m.hour();
    console.log(currentHour);

    if (hour < currentHour) {
        classToAssign = "past";
    } else if (hour > currentHour) {
        classToAssign = "future";
    } else {
        classToAssign = "present";
    }

    blockToAssign.classList.add(classToAssign);
})

// Code to make all saveBtn clickable
var saveBtn = document.querySelectorAll(".saveBtn");
saveBtn.forEach( (btn) => {
    btn.addEventListener("click", saveInput);
})

// Function to save input entered into textarea
function saveInput() {
    alert("Woo!")
    // var input = document.querySelector(".col")
    // localStorage.setItem(key, input.value)
}

