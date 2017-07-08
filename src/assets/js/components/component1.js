'use strict';

function Pantalla1 () {
	var contenedorGeneral = $('<section></section>');
	var estado = state.new;
	var index = 0;
	estado.forEach(function (element) {
		index++;

		var article = $(`<article class="bg-img-${index}"></article>`);
		var title = $('<h4>' + element.title + '</h4>');
		//var img = $(`<img class="img-responsive" src="assets/img/foto${index}.png" alt="${element.img}" style="width: 100%">`);

		article.append(title);
		//article.append(img);

		if(element.brief != undefined) {
			var brief = $('<p>' + element.brief + '</p>');
			article.append(brief);
		}

		contenedorGeneral.append(article);
	});


	return contenedorGeneral;
}
