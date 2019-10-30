// 1. Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

function str(a) {


    if (typeof (a) === 'string') {
        res = 'true';
    }
    else {
        res = 'false';
    }
    return res;
}


console.log(str(521));


/*2 Zadatak. Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false
 */


function str(res) {

    if (res === 'string') {
        if (res.length !== 0) {
            c = "false";
        }
        else {
            c = "true";
        }
    } else {
        c = "not string";
    }
    return c;
}
console.log(str(""));

/* 3. Zadatak. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
 */

function conc(a, b) {
    for (var i = 0; i < b; i++) {
        a = a + a;
        i++;
    }
    return a;
}
console.log(conc("ha", 2));


/* Zadatak 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
 */

function count(a, b) {
    c = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            c++;
        }
    }
    return c;
}

console.log(count("nikolinanikolic", 'n'));

/* Zadatak 5. Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.
 */


function finder(a, b) {
    c = -1;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            c = i + 1;
            break;
        }

    }
    return c;
}

console.log(finder("joowelena", "e"));

// 6. Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function finder(a, b) {
    c = -1;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {
            c = i + 1;

        }

    }
    return c;
}

console.log(finder("joowelena", "e"));


// 7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

function string(a) {
    c = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] === " ") {
            c[c.length] = null;


        }
        else {
            c[c.length] = a[i]
        }
    }
    return c;


}

console.log(string("aston martin 1"));
// Zadatak 8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function prime(a) {
    for (var i = 2; i < a; i++) {
        if (a % i === 0) {
            return "Not Prime!";
        }
    }

    return "Prime!";
}
console.log(prime(5));


//Zadatak 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//  "My random string", "_" -> "My_random_string"
//"My random string", "+" -> "My+random+string"
//  "My random string" -> "My-random-string"


function replace(text, letter) {

    var c = "";
    letter = "_"

    for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            c += n;
        } else {
            c += text[i];
        }
    }
    return c;

}

console.log(replace("My random string", ""));

/* Zadatak 10. Write a function to get the first n characters and add “...” at the end of newly created string.
 */


function replace(text, number) {

    var c = "";
    letter = "...";

    for (var i = 0; i < number; i++) {
        c += text[i];
    }
    c += letter;
    return c;

}

console.log(replace("My random string", 7));

// Zadatak 11. 
// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]




function stringe(a) {
    var c = [];

    for (var i = 0; i < a.length; i++) {
        var converted = parseFloat(a[i]);

        if (Number.isNaN(converted) || !Number.isFinite(converted)) {
            continue;
        }

        c[c.length] = converted;
    }

    return c;

}

console.log(stringe(["1", "21", undefined, "42.5", "1e+3", Infinity]))


// Zadatak 12. 
// Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retirement(a, b) {
    var m = "";
    var f = "";

    if (a < 65 && b === 'male') {
        m = (65 - a) + "years until retirement";
    }
    if (a < 60 && b === 'female') {
        f = (60 - a) + 'years until retirement';
    }
    else {
        result = 'person is already retired';
    }
    result = m + f;
    return result;

}

console.log(retirement(52, 'female'))

// 13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th


