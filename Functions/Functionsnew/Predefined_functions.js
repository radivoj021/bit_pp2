var res = parseInt(10);
console.log(res);
//

var res = parseInt('10fdf');
console.log(res);
//

var res = parseInt('fdf11'); //rez Nan
console.log(res);

// u oktalni npr:

var res = parseInt('125', 8);
console.log(res);

//
var res = parseFloat('10fdf.45kjk');
console.log(res);

//
if (isNaN(res)) {
    console.log('Invalid number!');
}

// 
var res = 4 / 0;
console.log(isFinite(res));

//
var res = 4 / 1;
console.log(isFinite(res));