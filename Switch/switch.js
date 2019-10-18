/* Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, 
however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. 
Input different from the listed cities should output a message"Please choose a different city".

*/

var cityName = "";

var result = "";

switch (cityName) {
  case "Belgrade":
  case "Kragujevac":
  case "Arandjelovac":
  case "Nis":
  case "Novi Sad":
    result = "Serbia";
    break;
  case "Berlin":
  case "Hamburg":
    result = "Germany";
    break;
  case "London":
  case "Manchester":
  case "Liverpool":
    result = "United Kingdom";
    break;
  case "Wien":
    result = "Austria";
    break;
  case "Porto":
  case "Lisabon":
  case "Setubal":
  case "Aveiro":
    result = "Portugal";
    break;
  default:
    result = "Please choose a different city";
    break;
}

console.log(result);

var a = 5;
var b = 4;
result = 0;
var operator = "/";

switch (operator) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      result = "The division by zero is not allowed";
    }
    break;
}

console.log(result);
