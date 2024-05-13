/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Salem
   Date: 2023
*/


// Add buttons to challenge, problems, and results sections
function pretty(){
    $("#challenge").toggleClass("special")
  }
  //click button
  $("#button-challenge").click(pretty)
  

  function prettyProblem(){
    $("#problems").toggleClass("special")
  }
  //click button
  $("#button-problems").click(prettyProblem)


  function prettyResults(){
    $("#results").toggleClass("special")
  }
  //click button
  $("#button-results").click(prettyResults)
    


