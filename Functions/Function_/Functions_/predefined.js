/* Zadatak 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
 */
'use strict'
function arrayofnum(array) {

    var newarray = [];

    for (var i = 0; i < array.length; i++) {

        var converted = parseFloat(array[i])

        if (Number.isNaN(converted) || !Number.isFinite(converted)) {
            continue;
        } else {
            newarray[newarray.length] = converted;
        }
    }
    return newarray;
}
console.log(arrayofnum(["1", "21", undefined, "42", "1e+3", Infinity]));


/* Zadatak 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
 */
'use strict'
function a(array) {
    var numbers = '';

    for (var i = 0; i < array.length; i++) {
        if (array[i] === undefined || array[i] === null || Number.isNaN(array[i])) {
            continue;
        }

        numbers += array[i];
    }

    return numbers;
}
var result = a([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(result)