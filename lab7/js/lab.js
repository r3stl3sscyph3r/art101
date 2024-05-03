// index.js - lab 7
// Author: salem hunstable
// Date: 4/28/24

//function
function sortUserName() {

    var userName = window.prompt("Username:");
    console.log("username= "+userName);

    var splitName = userName.split('');
    console.log("username= "+splitName);
    
    var sortName = splitName.sort();
    console.log("username= "+sortName);

    var nameSorted = sortName.join('');
    console.log("username= "+nameSorted);

    return nameSorted;
}
document.writeln("hah", sortUserName(), "</br>");