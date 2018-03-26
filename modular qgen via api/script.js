/*global $*/ //for c9
$(document).ready(function() {
	var bgColors = ['red', 'green', 'blue', 'black', 'maroon', 'navy', 'fuchsia', 'purple', 'Brown', 'BlueViolet', 'CadetBlue', 'Chocolate', 'Coral', 'CornflowerBlue', 'DarkBlue', 'DarkGoldenRod', 'DarkGreen', 'DarkMagenta', 'DarkOliveGreen', 'DarkRed', 'DarkSlateBlue', 'DarkSlateGray', 'DarkViolet', 'DeepPink', 'FireBrick', 'ForestGreen', 'Indigo', 'IndianRed', 'Maroon', 'MidnightBlue'];
	$.getJSON("https://talaikis.com/api/quotes/", callbackFuncWithData);

	function callbackFuncWithData(json) {
		var html = "";
		var quote = "";
		var author = "";
		var numRand = Math.floor((Math.random() * json.length));
		document.getElementById("body").style.backgroundColor = bgColors[Math.floor((Math.random() * bgColors.length))];
		quote = json[numRand]['quote'];
		author = json[numRand]['author'];
		html += "<div class='quote'>" + quote + "</div>";
		html += "<div class='author'>" + author + "</div>";
		html += "<p><a href='https://twitter.com/intent/tweet?text=" + quote + " -- " + author + " %23RICODEPUSH %23RIQUOTEPUSH' target='_blank' title='Tweet'><i class='fa fa-twitter' id='twitter'></i></a></p>";
		$(".quote-page").html(html);
	}
	$("#get-quote").on("click", function() {
		$.getJSON("https://talaikis.com/api/quotes/", function(json) {
			var html = "";
			var quote = "";
			var author = "";
			var numRand = Math.floor((Math.random() * json.length));
			document.getElementById("body").style.backgroundColor = bgColors[Math.floor((Math.random() * bgColors.length))];
			quote = json[numRand]['quote'];
			author = json[numRand]['author'];
			html += "<div class='quote'> " + quote + "</div>";
			html += "<div class='author'>" + author + "</div>";
			html += "<p><a href='https://twitter.com/intent/tweet?text=" + quote + " -- " + author + " %23RICODEPUSH %23RIQUOTEPUSH' target='_blank' title='Tweet'><i class='fa fa-twitter' id='twitter'></i></a></p>";
			$(".quote-page").html(html);
		});
	});
});