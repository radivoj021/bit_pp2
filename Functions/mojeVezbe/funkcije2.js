/* 1 Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false 

function string(str){
    if(typeof str === "string"){
        console.log(true);
    }
    else{
        console.log(false);
    }
}



2. Write a function to check whether a string is blank or not.


var aaa = "My random string";
string(aaa);


function string(str){
    if(str.length < 1){
        console.log(true);
    }
    else if(typeof str === "number"){
        console.log(false);
    }
    else if(typeof str === "boolean"){
        console.log(false);
    }
    else{
        console.log(false);
    }
}

var a = false;
string(a);




/* 3. Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
    "Ha", 3 -> "HaHaHa" 
    

    var word = "Ha";
    var res = "";

    for(var i = 0; i < 3; i++){
        res += word;
    }

    console.log(res); 


    // 4. Write a function to count the number of letter occurrences in a string.
    //"My random string", "n" -> 2

    var a = "My random string";
    var b = "n";
    var res = "";
    
    function count(niz, slovo){
        for(var i = 0; i < niz.length; i++){
            if(niz[i] === slovo){
                res += niz[i];
            }
            
        }
        return "Postoji " + res.length + " slova " + slovo;
    }
    
    var w = count(a, b);
    console.log(w);