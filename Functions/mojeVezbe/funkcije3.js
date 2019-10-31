/* 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string). 

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

var str1 = "My random string";
var str2 = "js";
var res = "";

for(var i = 0; i < str1.length; i++){
    res = str1 + str2;
}

console.log(res);



/*2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null] */

var niz = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var res = "";

for(i = 0; i < niz.length; i++){
    if(Number.isNaN(true) || niz[i] === undefined || niz[i] === false || niz[i] === null || niz[i] === ""){
        continue;
    }
    else{
        res += niz[i] + " ";
    }
}

console.log(res);
