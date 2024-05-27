// index.js - lab 13
// Author: salem hunstable
// Date: 5/26/24

function fizzBuzz() {
    var outputString = "";
    for (var i = 1; i <= 200; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            outputString += i + " FizzBuzzBoom!<br>";
        } else if (i % 3 === 0 && i % 5 === 0) {
            outputString += i + " FizzBuzz!<br>";
        } else if (i % 3 === 0 && i % 7 === 0) {
            outputString += i + " FizzBoom!<br>";
        } else if (i % 5 === 0 && i % 7 === 0) {
            outputString += i + " BuzzBoom!<br>";
        } else if (i % 3 === 0) {
            outputString += i + " Fizz!<br>";
        } else if (i % 5 === 0) {
            outputString += i + " Buzz!<br>";
        } else if (i % 7 === 0) {
            outputString += i + " Boom!<br>";
        } else {
            outputString += i + "<br>";
        }
    }
    $("#output").html(outputString);
}

$(document).ready(function() {
    fizzBuzz();
});