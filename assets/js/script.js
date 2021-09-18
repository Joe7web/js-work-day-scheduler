
//using moment.js to get current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



// connecting button to save to local storage
var saveButton = document.querySelector("button");

saveButton.addEventListener("click",function(event) {
    event.preventDefault();
    console.log("hello")

    var saveTextInput = document.querySelector(".info-area").value
    console.log(saveTextInput);
    localStorage.setItem("test","saveTextInput");

});










