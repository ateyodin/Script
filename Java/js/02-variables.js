"use strict"

//variables
// Una variable es un contenedor de informacion

var pais = "USA";
var continente = "America";
var antiguedad = 2019;
var pais_y_continente = pais+" "+continente;
let prueba = "hola";
alert(prueba);

pais = "Colombia";
continente = "America";

console.log(pais, continente, antiguedad);
console.log(pais_y_continente);




// let y var

var numero = 40;
console.log(numero);

if(true){
  numero = 50;
  console.log(numero); //se le asigno valor 50 a la variable
}
console.log(numero);



var text = "Hola como estas"
console.log(text);

if(true){
  let text = "Espero no del todo mal";
  console.log(text);
}

console.log(text);


//constantes
//Son variable tambien pero su valor no puede cambiar

var web = "https://google.com";
const ip = "192.88.0.12";

web = "https://hotmail.com";

console.log(web, ip);
