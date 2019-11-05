/*Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.


    var res = "";

for(var i = 0; i < 16; i++){
    if(i % 2 === 0){
        res += i + " number is even";
    }
    else{
        res += i + " number is odd";
    }
    res += "\n";
}

console.log(res);
*/




//Write a program to sum the multiples of 3 and 5 under 1000.

/*
    for(var res = 0; res < 1000; res++){
    res += (3 * 5); 
}

console.log(res - (3 * 5));

*/




//3. Write a program to compute the sum and product of an array of integers.

/*
    var niz = [1, 2, 3, 4, 5];
var zbir = 0;
var proizvod = 1;

for(var i = 0; i < niz.length; i++){
    zbir += niz[i];
}

for(var i = 0; i < niz.length; i++){
    proizvod *= niz[i];
}

console.log(zbir);
console.log(proizvod);

*/



//4. Write a program which prints the elements of the following array as a single string.

/*
    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var res = "";

for(var i = 0; i < x.length; i++){
    res += x[i];
}

console.log(res);
*/




//5. Write a program that prints the elements of the following array.

/*
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var res = "";

for(var i = 0; i < a.length; i++){
    for(var j = 0; j < a[i].length; j++){
        res += a[i][j] + ", ";
    }
}

console.log(res);
*/





//6. Write a program that outputs the sum of squares of the first 20 numbers.

/*
    var res = 0;

for(var i = 0; i < 21; i++){
    res += (i * i);
}

console.log(res);
*/





//7. Write a program that computes average marks of the following students. Then use this
//average to determine the corresponding grade.

