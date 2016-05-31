(function() {
	'use strict'

	var mapa = document.getElementsByClassName('mapa')[0];
	mapa.classList.add('visivel');

	mapa.addEventListener('click', function() {
		mapa.classList.add('selecionado');
	});

	mapa.addEventListener('mouseleave', function() {
		mapa.classList.remove('selecionado');
	});

	window.addEventListener('hashchange', function() {
		if(window.location.hash.match('#dialogo')) {
			document.body.classList.add('dialogo-aberto');
		} else {
			document.body.classList.remove('dialogo-aberto');
		}
	});

	document.addEventListener('keyup', function(e) {
		if(e.keyCode == 27) {
			window.location.hash = '#inicio';
		}
	});

	var dialogos = document.getElementsByClassName('dialogo');
	for(var i = dialogos.length - 1; i >= 0; i--) {
		dialogos[i].addEventListener('click', function(e) {
			e.stopPropagation();
		});
	}

	document.body.addEventListener('click', function() {
		window.location.hash = '#inicio';
	});
})();
