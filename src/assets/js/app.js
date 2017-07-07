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
