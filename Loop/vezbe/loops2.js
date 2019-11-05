/*
    1. Write a program that checks if a given element e is in the array a .
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no

var a = [5, -4.2, 18, 7];
var res = "";
var e = 3;

for(var i = 0; i < a.length; i++){
    if(a[i] === e){
        res = "yes";
    }
    else{
        res = "no";
    }
}

console.log(res);
*/



/*
    2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]


var niz = [-3, 11, 5, 3.4, -8];
var res = "";

for(var i = 0; i < niz.length; i++){
    if(niz[i] > 0){
        res += niz[i] * 2 + " ";
    }
    else{
        res += niz[i] + " ";
    }
}

console.log(res);

*/




/*
    3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/


var niz = [4, -22, 2, -12, -66];
var smallest = niz[0];
var res = "";

for(var i = 0; i < niz.length; i++){
    if(niz[i] < niz[0]){
        res = niz[i];
    }
}

console.log(res);

/*
    4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var niz = [4, 2, 2, -1, 6];
var res = "";

for(var i = 0; i < niz.length; i++){
    if(niz[i] > 0){
        res = niz[i];
    }
}

console.log(res);



/*
    5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16


var niz = [3, 11, -5, -3, 2];
var res = 0;

for(var i = 0; i < niz.length; i++){
    if(niz[i] > 0){
        res += niz[i];
    }
}

console.log(res);
*/





/*
    6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.


var niz = [3, 4, 12, 8];
var res = "";
var res2 = "";
var output = "";

for(var i = niz.length - 1; i >= 0; i--){
    res += niz[i] + " ";
}

for(i = 0; i < niz.length; i++){
    res2 += niz[i] + " ";
}

if(res === res2){
    output = "Niz je simetrican";
}
else{
    output = "Niz nije simetrican";
}

console.log(output);

*/



/*
    7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

var niz1 = [4, 5, 6, 2];
var niz2 = [3, 8, 11, 9];

for(var i = 0; i < niz.length; i++){

}


/*
    8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

var niz1 = [4, 5, 6, 2];
var niz2 = [3, 8, 11, 9];
var niz = [];
var res = "";

for(var i = 0; i < niz1.length; i++){
    niz = niz.push(niz[i]);
}
for(var j = 0; j < niz1.length; j++){
}

console.log(niz);


