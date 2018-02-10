// Objective - to generate random color hex codes and set it as background
// Use math.random to generate random number
// Convert random no to random hex code

let API_KEY = '75a23ddcb004e1d05a70e46c083430569d302908392fb1007a7f5014307561f3';
let WALL_URL = 'https://api.unsplash.com/photos/random?client_id=' + API_KEY;


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
	getImage();
	const apiURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

	$.getJSON(apiURL, function(data){
		document.getElementById('quote').innerHTML = data.quoteText;
		document.getElementById('author').innerHTML = data.quoteAuthor;
	});
	
}


function getImage(){
	$.getJSON(WALL_URL,function(data){
		console.log(data.urls.regular);
		document.getElementById("quote-box").style.backgroundImage = "url("+data.urls.regular+")";
	});
}




// window.setInterval(function(){
// 	setColor();

// },100);
