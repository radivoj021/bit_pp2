
function max(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
console.log(max(6, 81));

//////////////////////2.

function odd(a) {
    if (a % 2 !== 0) {
        return "The number is odd";
    }
    else {
        return "the number is even";
    }
}
console.log(odd(7));

///////////////////3.
function three_digit(a) {
    if (a > 99 && a < 1000)
        return 'Number is three digit';
    else
        return 'Is not three digit';
}
console.log(three_digit(182));

////////////////////4.

function mean(a, b, c, d) {
    return (a + b + c + d) / 4;
}
console.log(mean(5, 15, 9, 10));


//5.
function stars(a) {
    var str = '* ';
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === 0 || j === 0 || i === a - 1 || j === a - 1) {
                str += "* "
            } else {
                str += ' ';
            }
        }

        str += '\n';
    }
    return str;
}
console.log(stars(5));

/////////////////////////////// 5. funkcionise

function stars(a) {
    var str = " ";
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i === 0 || i === a - 1 || j === 0 || j === a - 1) {
                str += "* "
            } else {
                str += '  ';
            }
        }

        str += '\n';
    }
    return str;
}
console.log(stars(5));




//6.

function star(a, b, c) {
    var str = "";
    var row = "";
    for (var i = 0; i < a; i++) {

        str += "* ";
    }
    row = str + "\n";
    str = '';
    for (var i = 0; i < b; i++) {
        str += "* ";

    }
    var row1 = row + str + '\n';
    str = '';
    for (var i = 0; i < c; i++) {
        str += "* ";

    }
    var row3 = row1 + str;

    return row3;
}
console.log(star(5, 3, 7));



//7.
function numOfDigits(x) {
    var br = 0;
    while (x / 10 > 0) {
        br++;
        x = x / 10;
    }
    return br;
}

console.log(numOfDigits(12));



//7.
function numOfDigits(x) {
    var br = '';
    br += x;
    return br.length;

}

console.log(numOfDigits(16552));




//8.
function appearances(array, num) {
    var br = 0;
    for (var i = 0; i < array.length; i++)
        if (num === array[i])
            br++;
    return br;

}

console.log(appearances([2, 4, 7, 8, 7, 7, 1], 7));

//9.
function oddNum(array) {
    var br = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            br++;

        }
    } return br;
}
console.log(oddNum([2, 4, 7, 8, 7, 7, 1]));

//10.

function letter(str) {
    var a = '';
    a += str;
    var br = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === "A" || a[i] === "a") {
            br++;
        }
    } return br;
}
console.log(letter('Abcaabcaabca'));





//11.
function str(a, num) {
    var b = "";

    for (var i = 0; i < num; i++) {
        b += a;

    } return b;
}
console.log(str("Abc", 3));



////// 1.Write a function to check whether the `input` is a string or not.


function str(word) {
    if (typeof word === "string") {
        return true
    }
    else if (typeof word !== "string") {
        return false
    }

}
console.log(str(50));



//////////////2. Write a function to check whether a string is blank or not.

function aba(str) {
    if (typeof str === "string" && str.length === 0) {
        return "true";
    }
    else {
        return "false";
    }

}

console.log(aba(""));


//////////////3. Write a function that concatenates a given string n times (default is 1).

function ha(string, num) {
    var br = "";
    for (var i = 0; i < num; i++) {
        br += string
    }

    return br;

}

console.log(ha("ha", 3));


//////4. Write a function to count the number of letter occurrences in a string.

function appearances(rec, num) {
    var br = 0;
    for (var i = 0; i < rec.length; i++) {
        if (num === rec[i]) {
            br++;
        }

    }

    return br;

}

console.log(appearances("My random string", "n"));


//////5. Write a function to find the position of the first occurrence of a character in a string.
//The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function niz(array, letter) {
    var br = "";
    for (var i = 0; i < array.length; i++) {
        if (letter === array[i]) {
            return i + 1;

        }

    } return -1;
}



console.log(niz("Apsolutno", "s"));


var a = "apsolutni";
console.log(a.length);
console.log(a[5].length);


//7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.






















































function appearances(array, num) {
    var br = 0;
    for (var i = 0; i < array.length; i++) {
        if (num === array[i]) {
            br++;
        }

    }

    return br;

}

console.log(appearances([2, 4, 7, 8, 7, 7, 1], 7));
console.log(appearances([2, 4, 7, 8, 8, 9, 8, 8, 9, 2, 5], 8));





