// index.js - lab 8
// Author: salem hunstable
// Date: 5/06/24

function squareIt(x){
    var result = x * x;
    return result;
}

console.log("5 squared: ",squareIt(5));
console.log("3 squared: ",squareIt(3));

array = [5,3,7,25,32]
console.log("my array: ",array);

var square = array.map(squareIt);
console.log("squared array: ", square);

var add = array.map(function(x){
    var again = x + x;
    return again;
})
console.log("array again: ", add);

 // Your map results data
 var mapResults = array;

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html("Original array:", mapResults);
 
 