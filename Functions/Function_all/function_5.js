"use strict";



/*1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function getMinAndMax(numbers) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < numbers[i++]) {
            var min = numbers[i];
            var min = i;

        }

        for (j = 0; j < numbers.length; j++)
            if (numbers[j] > numbers[j++]) {
                var max = numbers[j];
                var max = j;
            }

    } var tmp = i;
    var max = tmp;
    var min = max;
    return numbers;

}

console.log(getMinAndMax([3, 500, 12, 149, 53, 414, 1, 19]));

/* 2. Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function newArray(numbers) {
    var transformed = [];

    for (var i = 0; i < numbers.length; i++) {
        var calc = numbers[i] / 2 + 5;

        if (calc === 0) {
            calc = 20;
        }

        transformed[i] = calc;
    }

    return transformed;

}

console.log(newArray([3, 500, -10, 149, 53, 414, 1, 19]));

/* 3. Initialize two arrays. The first one should contain student names, the second one the number of points for each student. 
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/


var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var grades = [50, 39, 63, 72, 99, 51, 83, 59];

var res = [];

function getGrade(points) {
    var grade = points / 10;

    if (grade === parseInt(grade)) {
        grade = parseInt(grade) + 1;
    }

    return grade;
}

function gradeStudents(students, points) {
    for (var i = 0; i < students.length; i++) {
        var grade = getGrade(points[i])

        if (grade < 6) {
            console.log(students[i] + ' FAILED ')
        } else {
            console.log(students[i] + " acquired " + points[i] + ' points and earned ' + grade)
        }
    }
}

gradeStudents(["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]);

/* 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500
from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.*/


function bla(value1, value2) {
    var sum1 = 0;
    for (var i = 1; i < value1; i++) {
        if (i % 2 === 0) {
            sum1 = sum1 + i;
        }

    }
    var sum2 = 0;
    for (var j = 1; j < value2; j++) {
        if (j % 2 !== 0) {
            sum2 = sum2 + j;
        }
    }



    return ((sum1 - sum2) * 12.5);

}
console.log(bla(1000, 500));

/* 7. Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and

create a new string from them. Print it out in the console. var names: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];*/


function firstTwoLetters(names) {
    var res = "";

    for (var i = 0; i < names.length; i++) {
        var name = names[i];

        if (typeof name === "string" && name.length > 1) {
            res += name[0] + name[1] + " ";
        }

    }

    return res;
}

console.log(firstTwoLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

/* 8. Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology*/

function rev(char) {
    var res = "";

    for (var i = char.length - 1; i >= 0; i--) {
        res += char[i];
    }
    return res;
}

console.log(rev("Belgrade Institute of Technology"));

// 9. Write a program that displays all the combinations of two numbers between 1 and 7. 
//Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. 
//(E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).


function combination(first, second) {
    var res = [];
    for (var i = first; i < second; i++) {

    }
}

/*
10.
Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/
