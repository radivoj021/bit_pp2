// Domaci zadatak sa zvezdicama

/*var size = 6;
var shape = "";

for (row = 0; row < size; row++) {
    var char = "*"
    if (row !== 0 && row !== size - 1) {
        char = '-'
    }
    for (var column = 0; column < size; column++) {
        shape += char;
    }
    shape += '\n'
}

console.log(shape);  */

var visina = 3;
var res = "\n";
var sirina = 10;
var ime = "Radivoj";


for(var i = 0; i < visina; i++){
    for(var j = 0; j < sirina; j++){
        if(i !== 0 && i !== visina - 1){
            if(j !== 0 && j !== sirina - 1){
                res += ime;
            }
            else{
                res += "*";
            }
        }
        else{
            res += "*";
        }
    }
    res += "\n";
}

console.log(res);