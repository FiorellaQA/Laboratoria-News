(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

function render(root) {
	root.empty();
	root.append(Pantalla1());
}

var state = {
	new: null,
	categories: null
};

$(function() {

	$.get('http://localhost:3000/api/categories/',function(error, data){
		const root =$('#root');
		state.categories = data;
		render(root);
		console.log(data);
		console.log(error);
	});

	$.get('http://localhost:3000/api/news/',function(error, data){
		const root =$('#root');
		state.new = data;
		render(root);
		console.log(data);
		console.log(error);
	});
});

},{}]},{},[1])