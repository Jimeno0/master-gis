              'use strict';

/*
  Introduce un disparador cuando hagas clic en el botón 'Acercar a Madrid'
  que ejecute el siguiente código
  map.centerAndZoom(madrid, 16);
*/
var acercar = $('#btnZoom');
acercar.click(function() {
  map.centerAndZoom(madrid, 16);
});

/*
 Introduce un disparador cuando hagas clic en el botón 'Mostrar ayuda'
 añada una clase hidden si no la tiene o que la quite si la tiene
*/

var ayuda = $('#btnHelp');
ayuda.click(function(){

$('#help').toggleClass('hidden');

})

/*Añado unso botones para cambiar entre callejero y mapa satelite*/

var satelite = $('#btnSatellite');
satelite.click(function(){

map.basemap = 'oceans';

})
