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
