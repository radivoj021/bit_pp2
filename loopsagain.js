
// Umesto broja ispisuje zvezdicu
// for (i = 1; i <= 100; i++) {
//     if (i % 4 === 0) {
//         console.log("*");
//     }
//     else console.log(i)
// }


// Umesto broja ne ispisuje nista
// result = ""
// for (i = 1; i <= 100; i++) {
//     if (i % 4 !== 0) {
//         result += i;
//     }
// }
// console.log(result + "");



// Umesto broja ne ispisuje nista, uz pomoc continue
// for (i = 1; i <= 100; i++) {
//     if (i % 4 === 0) {
//         continue;
//     }
//     console.log(i);
// }



// Stampaj sve brojeve od 100 do 0
// for(i=100; i>=1; i--){
//     console.log(i);
// }


// Ispisi poslednji broj u zadatom opsegu koji je deljiv sa 4
// var start = 34;
// var end = 99;
// var x = 4;

// var result;
// for (var number = end; number >= start; number--) {
//     if (number % 4 === 0) {
//         result = number;
//         break;
//     }
// }
// console.log(result);




// 1.Write a program that checks if a given element e is in the array a. 

// var a = [5, -4, 2, 3, 7];
// var e = 3;

// for (i = 0; i <= a.length; i++) {
//     if (e === a[i]) {
//         console.log("yes " + a[i]);
//     }
// }

// 2.Write a program that multiplies every positive element of a given array by 2.

// var a = [-3, 11, 5, 3.4, -8];

// for (i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//         a[i] = (a[i] * 2);
//     }
// }
// console.log(a);



// 3.
// var a = [4, 2, 2, -1, 6];
// var min = a[0];
// var fix;

// for (i = 0; i < a.length; i++) {
//     if (min > a[i]) {
//         min = a[i];
//         fix = i;
//     }
// }
// console.log(a[fix], fix);




// 4.
// var a = [4, 2, 2, -1, 6];
// var min = a[0];
// var fix;
// for (i = 0; i < a.length; i++) {
//     if (min>a[i]) {
//         fix = min;
//         min=a[i];
//     }
// } console.log(fix);



// 5.
// var a = [3, 11, -5, -3, 2];
// var sum = 0;

// for (i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//         sum += a[i];
//     }
// }
// console.log(sum);



// var a = [4, 5, 6, 2];
// var b = [3, 8, 11, 9];
// var c = [];

// for (i = 0; i < a.length; i++) {
//     if (i % 2 === 0) {
//         c = a[i];
//     } else if (i % 2 !== 0) {
//         c = b[i];
//     }
// }


// 9.
// var e = 2;
// var a = [4, 6, 2, 8, 2, 2];

// for (i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         delete a[i];
//     }
// }
// console.log(a);

// var e = 2;
// var a = [4, 6, 2, 8, 2, 2];
// var b = [];

// for (i = 0; i < a.length; i++) {
//     if (a[i] !== e) {
//         b[b.length] = a[i];
//     }
// }
// console.log(b);


// var e = 78;
// var p = 3;
// var a = [2, -2, 33, 12, 5, 8];
// var b = [];

// for (i = 0; i < a.length; i++) {
//     if (i === p) {
//         b[b.length] = e;
//     }

//     b[b.length] = a[i];
// }

// console.log(b);

var size = 5;
var stars = "";
var sumstars = "";
for (i = 0; i < size; i++) {
    stars += " * ";
    sumstars += stars + "\n";
}
console.log(sumstars);