//todo

let num = 0;

window.onload = function() {
	$('#input').click(function() {
		$('#output').html(++num);
	});
}

window.onkeyup = function(e) {
	let key = e.keyCode ? e.keyCode : e.which;
}

