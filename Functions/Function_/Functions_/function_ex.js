// 1.

// function sum(a, b) {
//     c = a + b;
//     return c;
// }
// sum(3, 94)
// console.log(c)


// 2.

// function check(a) {
//     if (a % 2 === 0) {
//         c = 'true';
//     }
//     else {
//         c = 'false';
//     }
//     return c;
// }
// check(22)
// console.log(c)

// 3.

// function digit(a) {
//     if (a > 99 && a < 1000) {
//         number = 'the number is three digits long';

//     }
//     else {
//         number = 'number is not three digits long';
//     }
//     return number;
// }
// digit(156)
// console.log(number)

// 4.

// function numbers(a, b, c, d) {
//     mean = (a + b + c + d) / arguments.length;
//     return mean;
// }
// numbers(8, 91, 2, 54)
// console.log(mean)

5.

function num(n) {
    result = "";
    for (var i = 0; i < n; i++) {


        if (i !== 0 && i !== n - 1) {
            result += '*   *' + '\n';
        } else {

            result += '*****' + '\n';

        }
    }
    return result;
}

num(5)
console.log(result)




// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw:


function b(dimension) {
    var a = "";
    var b = "";

    for (var i = 0; i < dimension; i++) {
        a = ""; //resetuje row

        for (var j = 0; j < dimension; j++) {
            if (j === 0 || j === dimension - 1 || i === 0 || i === dimension - 1) {
                a += "*";

            } else {
                a += ' ';
            }

        }
        b += a + '\n';
    }
    return b;
}

console.log(b(6));




// 7. // 7. Write a program that calculates a number of digits of a given number


function number(e) {
    a = e + "";
    del = a.length;


    return del;
}

number(1091)
console.log(del)

// 8. Write a program that calculates a number of appearances of a given number in a given array.
//Inputs: 

function appearances(a, e) {
    var c = 0;
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            c++;
        }




    }
    return c;
}

var a = [2, 4, 7, 8, 7, 7, 1, 7];
var e = 7
console.log(appearances(a, e));

// 9. Write a program that calculates the sum of odd elements of a given array. 
// var a = [];
// var c = 0;
// function odd(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 1) {
//             c += a[i];
//         }
//     }
//     return c;
// }
// console.log(odd([2, 4, 7, 8, 7, 7, 1, 3]));

/* Zadatak 10. Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.
 */
var c = "";

function letter(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "a") {
            var c += i;
        }
    }
}