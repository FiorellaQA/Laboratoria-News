'use strict';

function Pantalla1 () {
	var contenedorGeneral = $('<div></div>');
	var estado = state.categories;

	estado.forEach(function (element) {
		var p = $('<p>' + element.title + '</p>');
		contenedorGeneral.append(p);
	});


	return contenedorGeneral;
}
