/* 1. Write a program that calculates the maximum of two given numbers. 

function zbir(a, b){
    res = a + b;
    return res;
}


var z = zbir(10,19);
console.log(z);



 2. Write a program that checks if a given number is odd. 

function odd(a){
    if(a % 2 === 0){
        res = "number is even";
    }
    else{
        res = "number is odd";
    }
    return res;
}

var f = odd(11);
console.log(f);




3. Write a program that checks if a given number is a three digit long number. */

function tdn(num){
    if (num / 10 < 1){

    }
}

/* 4. Write a program that calculates an arithmetic mean of four numbers.

function four(a, b, c, d){
    var res = (a + b + c + d) / 4;
    return res;
}

var a = four(10, 10, 10, 10);
console.log(a); */


/* 8. Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3


function number(a, e){
    res = "";

    for(var i = 0; i < a.length; i++){
        if(a[i] === e){
            res += a[i];
        }
    }
    return "Broj " + e + " se pojavljuje " + res.length + " puta.";
}

aa = [2, 4, 7, 8, 2, 2, 7, 5, 2, 7, 1];
ee = 2;
var dd = number(aa, ee);

console.log(dd);

*/
