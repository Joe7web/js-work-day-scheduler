//console.log("hello world");

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//var container = $('.container')



//var timeblock = $('div')

//var time = $('span')
//var textInput = $('input')
//var saveButton = $('button')



//timeblock
    //section -time 
    //section to enter data
    //section to click to save to LS


//     First container
// white_check_mark
// eyes
// raised_hands





// 5:16
// // changes colors based on time of day
// function colorChange() {
//     // .inputField sets the location for "this", ".each" allows function to run through each container
//     $(".inputField").each(function () {
//         // "H" format puts time in military hour
//         var todayInTime = moment().format("H")
//         // "this" refers back to .inputfield, each input has a different id#, parseInt turns it into a number 
//         var hour = parseInt($(this).attr("id"))
//         // each class is connected to a different color
//         if (hour < todayInTime) {
//             $(this).addClass("past");
//             $(this).removeClass("present");
//             $(this).removeClass("future");
//         }
//         else if (hour == todayInTime) {
//             $(this).addClass("present");
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//         }
//         else {
//             $(this).addClass("future");
//             $(this).removeClass("past");
//             $(this).removeClass("present");
//         }
//     })