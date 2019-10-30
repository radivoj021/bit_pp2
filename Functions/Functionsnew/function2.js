/* 1. Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false*/


function first(a) {
    var emptyString = "";
    if (a === emptyString) {
        return " - > True";
    } else {
        return "false";

    }
}


console.log(first());

/* 2.Write a function to check whether a string is blank or not. */
//var result = '';
var check = '';

function blankOrNot(a) {
    if (a.length === check) {
        return 'Blank';
    }
    else {
        return "It is not blank string";
    }
}


console.log(blankOrNot('4'));

/*3. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"  */



function concatenates(x, givenString) {
    var rez = '';
    for (var i = 0; i <= x; i++) {

        rez += givenString;

    }
    return rez;
}


console.log(concatenates(4, 'Ha'));

/* 4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function count(e, str) {
    var newStr = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === e) {
            newStr++;
        }
    }
    return newStr;


}
console.log(count('n', 'My random string'));

/* 5. Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form. If there are no occurrences of the character, the function should return -*/

function occurrences(e, str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === e) {
            return i + 1;
        }
    }

    return -1;
}

console.log(occurrences('n', 'My random string'));

/* 6. Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/


function occurrences(e, str) {

    for (i = str.length - 1; i >= 0; i--) {
        if (str[i] === e) {
            return i + 1
        }
    }
    return -1
}
console.log(occurrences('m', 'my random string'));

str = 'my random string'
console.log(str.length)

/*7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"Random" -> ["R", "a", "n", "d", "o", "m"]*/

function space(str) {
    var space = ' ';
    var array = [];

    for (i = 0; i < str.length; i++) {
        if (str[i] !== space) {
            array[i] = str[i]
        }
        else {
            array[i] = null;
        }
    } return array;
}
console.log(space('My random string'));


/*8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */
















