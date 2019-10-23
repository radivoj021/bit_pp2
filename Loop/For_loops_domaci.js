// Domaci zadatak sa zvezdicama

var size = 6;
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

console.log(shape);