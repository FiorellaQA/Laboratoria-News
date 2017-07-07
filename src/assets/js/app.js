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
		$.get('/api/categories/',function(data){
		const root =$('#root');
		state.categories = data;
		render(root);
		console.log(data);
	});
	/*
	$.get('http://localhost:3000/api/news/',function(error, data){
		const root =$('#root');
		state.new = data;
		render(root);
		console.log(data);
		console.log(error);
	});*/
});
