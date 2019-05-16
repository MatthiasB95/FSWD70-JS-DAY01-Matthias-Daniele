/* 


*/


var statement = "Hey there, i am a javascript developer, and i live in vienna";



var ijavS = statement.substring( 11, 39);


var noFirstLetter = ijavS.slice(1)

var upperCase = ijavS.charAt(0).toUpperCase() + noFirstLetter;

//document.write(upperCase);


var CommaToDot = upperCase.replace('\,', '\.' );

document.write(CommaToDot);

var arr = [ "apple", "banana", "kiwi"];

//    output [ "apple", "banana", "strawberry","orange","kiwi"]

arr.splice( 2, 0, "strawberry","orange"); 


document.write('<br>'+arr);