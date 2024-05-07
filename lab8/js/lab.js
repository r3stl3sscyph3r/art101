// index.js - lab 8
// Author: salem hunstable
// Date: 5/06/24

    //function
function squareIt(x){
    var result = x * x;
    return result;
}

console.log(squareIt(5));
console.log(squareIt(3));

array = [5,3,7,25,32]

array.map(squareIt);

array.map(function(x){
    return x + 2;
})

var mapResults = array.map(squareIt);
console.log("Results: ", mapResults)