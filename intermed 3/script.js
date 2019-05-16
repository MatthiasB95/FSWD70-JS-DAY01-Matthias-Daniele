/* 
Create a program that will output each fruit on a separate line in the web browser from the following string

 "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"

Output: mango cherries kiwi grapes pear peach orange lemon

*/


fruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
fruitSplit = fruit.split('/').join("<br>");                                  //  <br>


document.write(fruitSplit);


//    var acp = fruit.replace(/\//g, '<br>' ); 
   //document.write(acp);                                   REPLACE CODE

