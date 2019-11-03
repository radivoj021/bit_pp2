/*
function math(niz){
    var res = "";


    for(i = 0; i < niz.length; i++){
        if(niz[i] % 2 === 0){
            res += niz[i] + " ";
        }

    }
    return res;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(math(array));
*/




/*
    var x = 3;
var y = -7;
var z = 2;

if(x > 0 && y > 0 && z > 0){
    console.log("The sign is +");
}
else if(x > 0 && y < 0 && z < 0){
    console.log("The sign is +");
}
else if(x < 0 && y < 0 && z > 0){
    console.log("The sign is +");
}
else if(x < 0 && y > 0 && z < 0){
    console.log("The sign is +");
}
else{
    console.log("The sign is -");
}
*/



/*
var sample = 10;
var res;

if(typeof sample === "number"){
    if(sample % 2 === 0){
        res = sample / 2; 
    }
    else{
        res = "xxxxxxxx";
    }
}

console.log(res);
*/


/*
    var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if(a <  b && a > c && a > d && a > e){
    console.log("a");
}
else if(b > c && b > d && b > e && b > a){
    console.log("b");    
}
else if(c > d && c > e && c > a && c > b){
    console.log("c");
}
else if(d > e && d > a && d > b && d > c){
    console.log("d");
}
else{
    console.log("c");
}
*/

/*
    var a = 0;
var b = -1;
var c = 4;

if(a > b && a > c){
    if(b > c){
        console.log(a, b, c);
    }
}
else if(b > c && b && a){
    if(c > a){
        console.log(b, c, a);
    }
}
else if(c > a && c > b){
    if(a > b){
        console.log(c, a,b);
    }
}

*/

var res = "";

for(i = 0; i < 5; i++){
    for(j = 0; j < 5; j++){
        res += "*";
    }
    res += "\n";
}

console.log(res);