/*
    var niz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var res = "";

for(var i = 0; i < niz.length; i++){
    if(niz[i] === 0){
        res += niz[i] + " Nula se ne deli " + "\n";      
    }
    else if(niz[i] % 2 === 0){
        res += niz[i] + " Deljiv " +"\n";
    }
    else{
        res += niz[i] + " Nije deljiv " + "\n";
    }
}

console.log(res);
*/

var res = 0;
a = 15;  

do{
    res += a;
}
while(res < 1000);

console.log(res);