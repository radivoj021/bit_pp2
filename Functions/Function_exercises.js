//1.Write a program that calculates the maximum of two given numbers. 

function max(a, b) {
    return a + b;
}
max(2, 6);
console.log(max(2, 6));

//2.Write a program that checks if a given number is odd.

function odd(a) {
    if (a % 2 == 1) {
        return "Number is odd";

    }
    else {
        return "Number is even";

    }

    return a;
}
console.log(odd(3));

//3.Write a program that checks if a given number is a three digit long number.

function number(a) {
    if (a < 1000 && a > 99) {
        return "Number is a three digit number";

    } else {
        return "Number is not a three digit number";
    }
}
console.log(number(50));

//4. Write a program that calculates an arithmetic mean of four numbers.

function arithemticMean(a, b, c, d) {
    var sum = a + b + c + d;
    return sum / 4;
}

console.log(arithemticMean(10, 10, 10, 10));

/*5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:
*****
*    *
*    *
*    *
*****
*/



/*6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:




// function row(a, b, c) {
//     var shape = "";

//     var row = "";
//     for (var i = 0; i < a; i++) {
//         row += " * ";
//     }
//     shape += row + '\n';


//     var row = "";
//     for (var i = 0; i < b; i++) {
//         row += " * ";
//     }
//     shape += row + '\n';


//     var row = "";
//     for (var i = 0; i < c; i++) {
//         row += " * ";
//     }
//     shape += row + '\n';


//     return shape;
// }

// console.log(row(5, 4, 7));

// drugi nacin

function row() {
    // var arguments = [5, 4, 7]
    var shape = "";

    for (var index = 0; index < arguments.length; index++) {
        var row = "";

        for (var i = 0; i < arguments[index]; i++) {
            row += " * ";
        }

        shape += row + '\n';
    }

    return shape;
}

console.log(row(5, 4, 7));
 */

//7.

var num = 325;

for (i = 0; i < a; i++) {
    var res = num / 10;
    if ()
}
function number(a) {

}


