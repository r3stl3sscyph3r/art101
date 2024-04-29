// index.js - lab 6
// Author: salem hunstable
// Date: 4/28/24

myTransport = ['car','walking','bicycle','bus'];

myMainRide = {
  make: 'Nissan',
  model: 'Rogue',
  color: 'Black',
  year: 2015,
  age: function(){return 2015 - this.year;}
}

document.writeln("How I get around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
