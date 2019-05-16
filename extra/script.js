/* 


*/


var statement = "Hey there, i am a javascript developer, and i live in vienna";

var x = (statement.substring( 11, 39));

var firstLetter = x.slice(1);

var upperCase = x.charAt(0).toUpperCase() + firstLetter;

var CommaToDot = upperCase.replace('\,', '\. ' );

document.write(CommaToDot);


