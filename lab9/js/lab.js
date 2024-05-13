/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Salem
   Date: 2023
*/
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

$("#button-challenge").click(function(){
    // Toggle the "special" class for the challenge section
    $("#challenge").toggleClass("special");
});
