
var size = 4;
var shape = "";


for (var row = 0; row < size; row++) {
    for (var column = 0; column < size; column++) {
        shape += " * ";
    }

    shape += " \n ";

}
console.log(shape);


var size = 6;
var shape = '';
for (var row = 0; row < size; row++) {
    var char = '*'
    if (row != 0 && row != size - 1) {
        char = '-';
    }
    for (var j = 0; j < size; j++) {
        shape += char;
    }
    shape += '\n';
}
console.log(shape);
////////////////////////

var a, b, c;
a = 3;
b = 4;

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 7));

///////////////////////////
var school, bit;
function print(school, bit) {
    console.log(school + ' => generation ' + bit);
}

print(3, 7);

//////////
function add(a, b) {
    console.log(a, b);

}
add(3, 6);
////////////////////


function add(a, b) {
    a + b;
}
var res = add(3, 4);
console.log(add(3, 4));

////////////////////

function add(a, b) {
    return 5;
}
var res = add();
console.log(res);

//////////////////

function add(a, b) {
    return a + b
}
var res = add(3, 4);
console.log(res);


///////////////////


function add(a, b) {
    return a + b
}
var res = add(3, 4);

add(1000, 2000);
console.log(res);


//////////////////////////

function add(a, b) {
    c = a + b;
    return a + b
}
//var res = add(3, 4) + add(5, 5)

console.log(add(3, 5), c + 6);


/////////////////////////////

function add(a, b) {
    var c = a + b;
    return;
}
var res = add(3, 4);

console.log(res);



//////////////////
function add(a, b) {
    var c = a + b;
    return c;
}
var res = add(3, 4);

console.log(res);

/////////////////

function add() {
    console.log(arguments[0]);
    console.log(arguments[1]);

}
add(3, 4);

////////////////////






