function add(a, b) {
    console.log(a, b);

}
add(3, 4);

//

function add(a, b) {
    c = a + b;
    console.log(c);

}
add(3, 4);

//

function add(a, b) {
    return a + b;

}
var res = add(3, 4)
console.log(res);

//
function add(a, b) {
    return a + b;
}

var res = add(3, 4) + add(2, 8)
//var res = 7 + 10 // objasnjenje izraza iznad
//var res = 17

//ako ne stavimo return dobijamo undefined:

function add(a, b) {
    //...

    var c = a + b;
}

//return c;
return undefined

//


