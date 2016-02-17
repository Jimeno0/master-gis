'use strict';

/* 
  Define un objeto con nombre 'map' vacío
*/
var map = {};

/*
  Define una propiedad 'setBasemap' en el objeto map que contenga una función 
  que reciba como parámetro una cadena de texto y que establezca dicha cadena
  como propiedad del objeto
*/
map.setBasemap = function (text){
	map.basemap = text;
}

 map.setBasemap('streets');

/*
  Define una función anónima que se auto-ejecute. Dentro debe llamar a la función definida 
  en el objeto map y antes de que acabe imprima el valor de la propiedad usando console.log
*/

(function(){
  map.setBasemap('streets');
  console.log(map);
}());

/* Me sigue diciendo que "Uncaught TypeError: map.setBasemap is not a function"
creo que porque se lanza antes la funcion anonima de que defina la funcnion setBasemap
*/
