// index.js - lab 7
// Author: salem hunstable
// Date: 4/28/24

//function
function sortUserName() {

    var userName = window.prompt("Username:");

    var splitName = userName.split('');
    
    var sortName = splitName.sort();

    var nameSorted = sortName.join('');

    return nameSorted;
}
document.writeln("hah"+ nameSorted + "<br>");