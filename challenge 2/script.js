/* 

Structure the following sentence:

Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$"properties $flow$down;$actions$flow$up".



*/


sentence = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$?\"properties $flow$down;$actions$flow$up\".";

sentenceStructured  = sentence.split('$');   

document.write(sentenceStructured);                      //Commas are accepted for division between the words.                          

document.write('<br><br>'+"Without Commas"+'<br>');


var sentNoComas = sentence.replace(/\$/g, ' ' ).replace(/\?/, ''); 

document.write(sentNoComas);                                  // REPLACE CODE


