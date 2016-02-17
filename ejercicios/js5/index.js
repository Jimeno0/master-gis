'use strict';

// Accede al elemento h1 y modifica el color #C00
var h1 = document.getElementsByTagName('h1')[0];
h1.setAttribute('style','color:#C00');

//Accede al ID header y cambia el color de fondo a 

var header = document.getElementById('header');
header.setAttribute('style','background-color: yellow');

//Accede al elemento map y modifica la anchura del mapa 'width:500px'

var mapa = document.getElementsByClassName('map')[0];
//mapa.setAttribute('style','width:500px');

//Para cambiar el contenido escrito en el HTML5:
var h1 =document.getElementsByTagName('h1')[0];
h1.innerHTML ='My first map';