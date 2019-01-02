let num = 0;

window.onload = function() {
	$('#input').click(function() {
		num++;

		//send get request
		$.get("/scripts/number.php?n=" + num);

	});

	setInterval(update, 100);

	update();
}

function update() {
	//stops browser from caching the number, to get most recent num
	$.getJSON("data.json?stopcache=" + Date.now().toString(), function(data) {
		num = parseInt(data);
	});

	$('#output').html(num);
}
