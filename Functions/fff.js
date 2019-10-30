//1
"use strict";
function findMaxIndex(arr) {
    var max = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            index = i;
        }

    }
    return index;
}
function finMinIndex(arr) {
    var min = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            index = i;
        }

    }
    return index;
}
function switchPlaces(arr, index_1, index_2) {
    var help = arr[index_1];
    arr[index_1] = arr[index_2];
    arr[index_2] = help;
    return arr;
}
var array = [3, 500, 12, 149, 53, 414, 1, 19];
var indexMax = findMaxIndex(array);
console.log(indexMax);
var indexMin = finMinIndex(array);
console.log(switchPlaces(array, indexMax, indexMin));
//2
function manipulateArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr[i] = 20;
            continue;
        }
        newArr[i] = arr[i];
        newArr[i] /= 2;
        newArr[i] += 5;
    }
    return newArr;
}
console.log(manipulateArray([3, 500, -10, 149, 53, 414, 1, 19]));




//3
function printNamesAndGrades(Names, Grades) {
    var grade;
    for (var i = 0; i < Names.length; i++) {
        if (Grades[i] % 10 == 0) grade = Grades[i] / 10
        else grade = parseInt(Grades[i] / 10) + 1;
        if (grade < 6) console.log(Names[i] + " FAILED");
        else console.log(Names[i] + " acquired " + Grades[i] + " points and earned " + grade)
    }
}
var names = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];
printNamesAndGrades(names, grades);





//6
function problem6(value1, value2) {
    var greater = (value1 > value2) ? value1 : value2;
    var sum = 0;
    for (var i = 1; i <= greater; i++) {
        if (i % 2 === 0 && i <= value1) sum += i;
        if (i % 2 === 1 && i <= value2) sum -= i;
    }
    return sum;
}
console.log(12.5 * problem6(1000, 500));

//
var strings = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];

function firstTwoLett(arr) {
    var newString = "";
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            if (arr[i].length >= 2) {
                newString += arr[i][0] + arr[i][1];
            }
        }
    }
    return newString;
}
console.log(firstTwoLett(strings));
//
function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
var bit = "Belgrade Institute of Technology";
console.log(reverseString(bit));
//
function pairs(value1, value2) {
    var counter = 0;
    for (var i = value1; i <= value2; i++) {
        for (var j = value1; j <= value2; j++) {
            if (i !== j) {
                console.log("(" + i + "," + j + ")");
                counter++;
            }
        }
    }
    console.log(counter);
}
pairs(1, 7);
//
function isPrime(n) {
    if (n === 2) return true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(199));
//
function isPalindrome(string) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length - 1 - i]) return false;
    }
    return true;
}
console.log(isPalindrome("ANA"));
//
function greatestCommonDivisor(number1, number2) {
    var result;
    var greater = (number1 > number2) ? number1 : number2;
    for (var i = 0; i <= greater / 2; i++) {
        if (number1 % i === 0 && number2 % i === 0) result = i;
    }
    return result;
}
console.log(greatestCommonDivisor(666, 777));
//
function bubbleSort(numbers) {
    var swapped = true;
    var help;
    while (true) {
        swapped = false;
        for (var i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] > numbers[i + 1]) {
                help = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = help;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
}
var arr = [13, 11, 15, 5, 6, 1, 8, 12];
bubbleSort(arr);
for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
}
console.log(arr);
//
function bubbleSortDescending(numbers) {
    var swapped = true;
    var help;
    while (true) {
        swapped = false;
        for (var i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] < numbers[i + 1]) {
                help = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = help;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
}
arr = [13, 11, 15, 5, 6, 1, 8, 12];
bubbleSortDescending(arr);
console.log(arr);

