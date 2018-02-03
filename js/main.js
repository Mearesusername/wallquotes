// Objective - to generate random color hex codes and set it as background
// Use math.random to generate random number
// Convert random no to random hex code
function getColor(){
	return '#' + Math.random().toString(16).slice(2,8);
	// Math.random returns a random number between 0 and 1
}

function setColor(){
	var colorCode = getColor();
	document.body.style.background = colorCode;
}

document.body.onkeyup = function(event){
	if(event.keyCode == 32){
		setColor();
		getQuotes();
	}
}
setColor();


function getQuotes(){
	const apiURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

	$.getJSON(apiURL, function(data){
		console.log(data);
		document.getElementById('quote').innerHTML = data.quoteText;
		document.getElementById('author').innerHTML = data.quoteAuthor;
	});
	
}




window.setInterval(function(){
	setColor();

},100);
