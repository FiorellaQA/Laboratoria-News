'use strict';

function Pantalla1 () {
	var contenedorGeneral = $('<div></div>');
	var estado = state.categories;

	estado.forEach(function (element) {
		var p = $('<section>' + element.title + '</section>');
		contenedorGeneral.append(p);
	});


	return contenedorGeneral;
}
