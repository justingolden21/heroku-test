let num = 0;

window.onload = function() {
	$('#input').click(function() {
		$.get("/scripts/increment.php");

		console.log("click");

		update();
	});

	setInterval(update, 100);

	update();
}

function update() {
	console.log("update");

	//stops browser from caching the number, to get most recent num
	$.getJSON("number.json?stopcache=" + Date.now().toString(), function(data) {
		console.log("got data: " + data);
		num = parseInt(data);
	});

	$('#output').html(num);
}
