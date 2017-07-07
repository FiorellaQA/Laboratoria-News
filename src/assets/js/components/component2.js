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
