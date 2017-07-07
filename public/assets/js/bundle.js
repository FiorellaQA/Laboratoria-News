(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

'use strict';

function Pantalla3 (update) {
	var wrap = $('<div class="container"></div>');
	var section =  $('<section class="containerScreen"></section>');
	var containerImg =  $('<div class="containerImg2"></div>');
	var img = $('<img class="responsive-img" src="assets/img/icons/message.png" alt="">');
	var contentText =  $('<div></div>');
	var titulo = $('<h2 class="title center">Ahora ingresa tu código</h2>');
	var text = $('<p class="center">Enviamos un SMS con el código de validación al número <span class="numberMorado">' + state.phone + '</span></p>');
	var form = $('<div class="contentCode"></div>');
	var input = $('<input type="number" id="user-code" placeholder="  - - - - - - " required>');
	var containerTime = $('<div class="containerTime"></div>');
	var p = $('<p>Reintentar en </p>');
	var imgclock = $('<img class="time" src="assets/img/icons/clock.png" alt="">');
	var time = $('<span id="timer"></span>');

	containerTime
		.append(p)
		.append(imgclock)
		.append(time);

	containerImg.append(img);

	contentText
		.append(titulo)
		.append(text);

	form
		.append(input)
		.append(containerTime);

	section
		.append(containerImg)
		.append(contentText)
		.append(form);

	input.on('keyup',function (e) {
		e.preventDefault();

		if($(this).val() == state.code){
			state.screen = "pantalla4";
			update();
		}
	});

	input.on('click',function (e) {
		e.preventDefault();
		var seconds_left = 22;
		var interval = setInterval(function() {
			$('#timer').html(--seconds_left);

			if (seconds_left <= 0) {
				$.post('/api/resendCode',{
					phone: state.phone
				},function(response){
					if (response.success) {
						//state.screen = "pantalla4";
						state.code = response.data;
						console.log('Codigo: ' + state.code);
					}
				});
				clearInterval(interval);
			}
		}, 1000);
	});
	wrap.append(section);
	return wrap;
}/**
 * Created by fiorellaquispe on 7/07/17.
 */

'use strict';
// function render(root) {
// 	root.empty();
// 	var wrapper = $('<div class="wrapper"></div>');
//
// 	//Añadiendo componentes:
//
// 	// wrapper.append(Header());
// 	// wrapper.append(detailModal( _ => { render(root); }));
// 	wrapper.append(Grid());
//
// 	if(state.screen == null) {
// 		wrapper.append(Pantalla1(function () {
// 			render(root);
// 		}));
// 	}else if(state.screen == "pantalla2"){
// 		wrapper.append(Pantalla2(function () {
// 			render(root);
// 		}));
//
// 	root.append(wrapper);
// }
//
// var state = {
// 		screen: null,
// 		phone: null,
// 		code: null
// };
//
// $(function() {
// 	$.getJSON("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AYW4sy910pu7ohi4cnh-uVMtuu1KFM4wh-qaii5EIvFbYaA__gAAAAA&fields=id%2Clink%2Cnote%2Cboard%2Cimage%2Cmetadata%2Coriginal_link%2Ccreator", function (result){
// 		state.board = result.data;
//
// 		console.log(result.data);
// 		const root = $('.root');
// 		render(root);
// 	});
// })

},{}]},{},[1])