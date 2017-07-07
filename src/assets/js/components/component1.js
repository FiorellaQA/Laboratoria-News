'use strict';

function Pantalla1 (update) {
	var wrap = $('<div class="container"></div>');
	var section =  $('<section class="containerScreen"></section>');

	var containerCarousel = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');

	var item1 = $('<div class="carousel-item center" href="#one!"></div>');
	var contentImg1 =  $('<div class="containerImg"></div>');
	var img1 =$('<img class="responsive-img" src="assets/img/icons/icon-people.png" alt="">');

	var contentText1 =  $('<div></div>');
	var titulo1 = $('<h2 class="title">Paga a tus amigos</h2>');
	var text1 =$('<p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

	var item2 = $('<div class="carousel-item center" href="#two!"></div>');
	var contentImg2 =  $('<div class="containerImg"></div>');
	var img2 = $('<img class="responsive-img" src="assets/img/icons/happy-person.png" alt="">');
	var contentText2 =  $('<div></div>');
	var titulo2 = $('<h2 class="title">Sin número de cuenta</h2>');
	var text2 =$('<p>Elige a quién pagar desde tu lista de contactos.</p>');

	var item3 = $('<div class="carousel-item center" href="#three!"></div>');
	var contentImg3 =  $('<div class="containerImg"></div>');
	var img3 = $('<img class="responsive-img" src="assets/img/icons/group-people.png" alt="">');
	var contentText3 =  $('<div></div>');
	var titulo3 = $('<h2 class="title">Gratis y Seguro</h2>');
	var text3 =$('<p>La transferencia es inmediata y gratuita de una cuenta a otra.</p>');

	var btn = $('<button class="btn-large" id="btn-registro">Registrarme</button>');

	contentImg1.append(img1);
	contentText1
		.append(titulo1)
		.append(text1);
	item1
		. append(contentImg1)
		.append(contentText1);

	contentImg2.append(img2);
	contentText2
		.append(titulo2)
		.append(text2);
	item2
		. append(contentImg2)
		.append(contentText2);

	contentImg3.append(img3);
	contentText3
		.append(titulo3)
		.append(text3);
	item3
		. append(contentImg3)
		.append(contentText3);

	containerCarousel
		.append(item1)
		.append(item2)
		.append(item3);

	section
		.append(containerCarousel)
		.append(btn);

	btn.on('click',function (e) {
		e.preventDefault();
		state.screen = "pantalla2";
		update();
	});

	return wrap.append(section);
}/**
 * Created by fiorellaquispe on 7/07/17.
 */
