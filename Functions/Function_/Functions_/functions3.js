// Zadatak 1:
// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"


function paste(string, number, addition) {
    var c = "";

    for (var i = 0; i < string.length; i++) {
        if (i < number) {
            c += string[i];
        } else if (i === number) {
            c += addition + string[i];
        } else {
            c += string[i]
        }
    }
    return c;
}
console.log(paste("Aston Martin", 6, "1234"));


/* Zadatak 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]

 */

function join(array) {
    var string = '';

    for (var i = 0; i < array.length; i++) {
        var converted = parseInt(array[i]);

        if (Number.isNaN(converted)) {
            continue;

        } else {
            string += converted + " ";
        }

    }
    return string;
}

console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]));




/* Zadatak 3. Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
 */


function join(array) {
    var newaraay = [];

    for (var i = 0; i < array.length; i++) {
        var converted = parseInt(array[i]);

        if (Number.isNaN(converted) || converted === 0) {
            continue;

        } else {
            newaraay[newaraay.length] = converted;
        }

    }
    return newaraay;
}

console.log(join([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* Zadatak 4.Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number
 */

function reverse(number) {

    var string = number + "";
    var newstring = '';

    for (var i = string.length; i > 0; i--) {
        newstring += string[i - 1]; // -1 zbog pozicije

    }
    var converted = parseInt(newstring);
    return converted;
}
console.log(reverse(123));




/* Zadatak 5. 
Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2                 ****** kako ????
[7, 9, 0, -2], 2 -> [0, -2]  */


function last(array, n) {

    var newarray = [];

    for (var i = array.length - n; i < array.length; i++) {
        newarray[newarray.length] = array[i];

    }


    return newarray;
}
console.log(last([7, 9, 0, -2], 2));

/* Zadatak 6. Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]         ///// da li treba napraviti da ako neko ne unese sam izbaci odnosno proveri resenje?
 */

value = null;

function create(number, value) {

    array = [];
    for (i = 0; i < number; i++) {

        array[i] = value;
    }
    return array;
}

console.log(create(4, 'Pera'));

/* 7. Zadatak Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.


Note: According to Wikipedia: In number theory, a perfect number is a 
positive integer that is equal to the sum of its proper positive divisors, 
that is, the sum of its positive divisors excluding the number itself (also 
    known as its aliquot sum). Equivalently, a perfect number is a number that 
    is half the sum of all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper 
positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal 
to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The 
next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

 */

function perfect(number) {
    var sum = 0;

    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        } else if (sum === number) {
            var c = number + " is perfect number";
        } else
            c = number + " is not a perfect number";
    }
    return c;
}
console.log(perfect(28));




/* Zadatak 8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'	a, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"
 */

function finder (sting, word) {

    var j = 0;

    for(var i = 0; i < string.length; i++) {
        if(string[i] === word[j]) {
               j++
        }
    }

}








/* Zadatak 9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"

 */

function hidding(mail) {

    

    string = '';
    for (var i = 0; i < mail.length; i++) {
        if(i<2) {
            string += mail[i];
        } else if (mail[i] === "@")
``
    }
}