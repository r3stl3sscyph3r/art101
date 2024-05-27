// index.js - lab 13
// Author: salem hunstable
// Date: 5/26/24

function fizzBuzz() {
    var output = "";

    for (var i = 1; i <= 200; i++) {
        var str = "";

        if (i % 3 === 0) {
            str += "Fizz";
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        if (i % 7 === 0) {
            str += "Boom";
        }

        if (str === "") {
            output += i + "<br>";
        } else {
            output += str + "!<br>";
        }
    }

    $("#output").html(output);
}

// Call the function
fizzBuzz();