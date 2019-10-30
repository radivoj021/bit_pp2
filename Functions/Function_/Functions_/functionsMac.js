/* 1. Zadatak Write a program that calculates the maximum of two given numbers. 
 */

function add(a, b) {
    c = a + b;
    return c;
}
var result = add(2, 5);
console.log(result);

/* 
2. Zadatak Write a program that checks if a given number is odd.
 */

function check(a) {
    if (a % 2 !== 0) {
        b = "odd";
    } else {
        b = "even"
    }
    return b;
}


var result = check(3);
console.log(result);

/* 3. Zadatak Write a program that checks if a given number is a three digit long number. */

function digit(a) {
    if (a > 99 && a <= 1000) {
        a = "true";
    } else {
        a = "false";
    }
    return a;
}

var result = digit(99);
console.log(result);

/* 4. Zadatak Write a program that calculates an arithmetic mean of four numbers.
 */

function arithmetic(a, b, c, d) {
    e = a + b + c + d;
    x = e / (arguments.length)
    return x;
}
var amiddle = arithmetic(5, 10, 15, 20);
console.log(amiddle);

/* Zadatak 5.Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
 *****
 *    *
 *    *
 *    *
 */

function draw() {

}


/*  */