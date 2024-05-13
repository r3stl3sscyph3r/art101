/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Salem
   Date: 2023
*/
// Add buttons to challenge, problems, and results sections
$("#challenge").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

// Add click listeners to the buttons
$("#button-challenge").click(function(){
    // Toggle the "special" class for the challenge section
    $("#challenge").toggleClass("special");
});

$("#button-problems").click(function(){
    // Toggle the "special" class for the problems section
    $("#problems").toggleClass("special");
});

$("#button-results").click(function(){
    // Toggle the "special" class for the results section
    $("#results").toggleClass("special");
});