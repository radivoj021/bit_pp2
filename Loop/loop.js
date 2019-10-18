var i = 0;

while (i < 100) {
    i++;
    console.log(i);
}

var sum = 0;
var pass = 1;

while (pass <= 100) {
    sum = sum + pass;
    pass++;
}

console.log(sum);



for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}


// Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.


for (var x = 0; x <= 15; x++) {

    if (x % 2 === 0) {
        console.log(x + " is even.")
    } else {
        console.log(x + " is odd.")
    }
}

var sum = 0;

for (var i = 0; i <= 1000; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        sum = sum + i;
    }
}

console.log(sum);



var array = [2, 3, 4, 5];
var sum = 0;
var product = 1;

for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
    product = product * array[i]
}

console.log(sum);
console.log(product);

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var stringLista = "";

for (var i = 0; i < x.length; i++) {
    stringLista = stringLista + x[i];
}

console.log(stringLista);

var a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];

for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

var sumSquare = 0;

for (i = 1; i <= 20; i++) {
    sumSquare += i * i;
    i++;
}

console.log(sumSquare);

var marks = [80, 77, 88, 95, 68];

var averageMark = 0;
var sum = 0;

var gradeDavid = 0;
var gradeMarko = 0;
var gradeDany = 0;
var gradeJohn = 0;
var gradeThomas = 0;

for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

averageMark = sum / (marks.length);

console.log("Average mark of the class is " + averageMark);

if (averageMark < 60) {
    console.log("Grade is F.");
} else if (averageMark < 70 && averageMark >= 60) {
    console.log("Grade is D.")
}




