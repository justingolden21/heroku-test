let num = 1;

window.onload = function() {
	$('#input').click(function() {
		num++;

		$.get("/scripts/increment.php");

		update();
	});

	setInterval(update, 100);

	update();
}

function update() {
	//stops browser from caching the number, to get most recent num
	$.getJSON("number.json?stopcache=" + Date.now().toString(), function(data) {
		num = parseInt(data);

		$('#output').html(num);
	});
}
