// content.js
// Implement logic in this file

// global variables:
var html = [];

// Listens for request from background.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	var images = ["https://s3.us-east-2.amazonaws.com/colorblock1742/05-Victor-E-Blue.jpg", 
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/991A00.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/Golden-Heavy-Body-Artist-Colors-Light-Magenta-1562-500x500.gif",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/blue.gif", "https://s3.us-east-2.amazonaws.com/colorblock1742/coquelicot.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/images-red.png",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/images.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/mikado_yellow_429863_i0.png",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/mizu.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/smaragdine.png",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/images.jpeg", "https://s3.us-east-2.amazonaws.com/colorblock1742/images-2.jpeg", 
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/images-2.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/images-3.png"];
		$("img").each(function(){
			var index = Math.floor(Math.random() * images.length);
			$(this).attr("srcset", 
				images[index] + " 640w, " + images[index] + " 750w, " + images[index] + " 1080w");
			$(this).attr("src", 
				images[index]);
			html.push(this);
		});

		$("video").each(function(){
			var index = Math.floor(Math.random() * images.length);
			$(this).replaceWith("<img src=" + images[index] + "></img>");
			html.push(this);
		});

		$("*").each(function(){
			var index = Math.floor(Math.random() * images.length);
			$(this).css("background-image", "url(" + images[index] + ")");
			html.push(this);
		});

		console.log(images);

		document.addEventListener('wheel', wheelHandler, false);
    }
  }
);

function wheelHandler(e) {
	var images = ["https://s3.us-east-2.amazonaws.com/colorblock1742/05-Victor-E-Blue.jpg", 
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/991A00.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/Golden-Heavy-Body-Artist-Colors-Light-Magenta-1562-500x500.gif",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/blue.gif", "https://s3.us-east-2.amazonaws.com/colorblock1742/coquelicot.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/images-red.png",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/images.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/mikado_yellow_429863_i0.png",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/mizu.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/smaragdine.png",
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/images.jpeg", "https://s3.us-east-2.amazonaws.com/colorblock1742/images-2.jpeg", 
    					"https://s3.us-east-2.amazonaws.com/colorblock1742/images-2.png", "https://s3.us-east-2.amazonaws.com/colorblock1742/images-3.png"];

	$("img").each(function(){
		if (!html.includes(this)) {
			var index = Math.floor(Math.random() * images.length);
			$(this).attr("srcset", 
				images[index] + " 640w, " + images[index] + " 750w, " + images[index] + " 1080w");
			$(this).attr("src", 
				images[index]);
			html.push(this);
		}});

	$("video").each(function(){
		if (!html.includes(this)) {
			var index = Math.floor(Math.random() * images.length);
			$(this).replaceWith("<img src=" + images[index] + "></img>");
			html.push(this);
		}});
	
	$("*").each(function(){
		if (!html.includes(this)) {
			var index = Math.floor(Math.random() * images.length);
			$(this).css("background-image", "url(" + images[index] + ")");
			html.push(this);
		}});
};