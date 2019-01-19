$(document).ready(function(){

	var i = 0;
	var images = ["0.jpg", "1.jpg", "2.jpg"];
	$("#template").css("background-image", "url(images/" + images[i] + ")");
	var i = 1;

	function changeBackground(){
		$("#template").css("background-image", "url(images/" + images[i] + ")");
		i++;
		if(i >= images.length)
			i = 0;
  	}
	setInterval(changeBackground, 4000);
});