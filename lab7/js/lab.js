// index.js - lab 7
// Author: salem hunstable
// Date: 4/28/24

//function
function sortUserName() {

    var userName = window.prompt("Username:");
    console.log("Username= " + userName);

    var sortedName = userName.split('').sort.join('');
    console.log(sortedName);

}
