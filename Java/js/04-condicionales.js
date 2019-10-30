"use strict"

//Condicionales
//Estructura de control que nos permite comparar para realizar una accion
// Si A es igual a B entonces haz algo



var edad1 = 9;
var edad2 = 12
//Si pasa esto
if(edad1 > edad2){
  //ejecuta esto
  console.log("La edad uno es mayor que edad dos");
} else {
  console.log("La edad uno es inferior");
}

// segundo ejemplo

var edad = 34;
var nombre = "David Suarez";

/*
//Operadores Relacionalaes

 >= : mayor o igual
 <= : menor o igual
 > : mayor
 < : menor
 == : igual
 != : distinto

*/

if( edad >=18){
  console.log(" Este tipo "+ nombre+" es mayor de edad, tiene "+edad);
  if(edad == 33){
    console.log("Dude you are old");
  } else {
    console.log(" Who am i?");
  }
} else {
  console.log(nombre+" Es un crio, mandalo a casa");
}
