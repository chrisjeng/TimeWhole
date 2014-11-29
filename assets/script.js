$(document).ready(function(){
	
	document.getElementById("button1").addEventListener("click", beginButton);
	document.getElementById("button2").addEventListener("click", cycleMsg);

	document.getElementById("msg1").style.display = 'block';

	function beginButton () {
		document.getElementById("secondPageEverything").style.display = 'block';
		document.getElementById("button1").style.display = 'none';
		$('html,body').animate({
			scrollTop: $('#secondPageEverything').css('top')
		}, 800, function() {

		});
	}

	$( "#redDot" ).click(function() {
		// alert( "Handler for .click() called." );
		if (!secondPageFaded) {
			fadeSecondPageMsg();
		}
		var newLeft = Math.random() * .9 + .05;
		var newTop = Math.random() * .9 + .05;
		$("#redDot").css("left", 100 * newLeft + "%");
		$("#redDot").css("top", 100 * newTop + "%");
	});

	// $("#secondPageEverything").css("display", "block");
	// $(".secondPageEverything").show();

	// $("#box").removeClass("bounce");

	var currMsg = 1;
	function cycleMsg () {
		$("#msg" + currMsg).fadeTo(400, 1, doNothing());
		currMsg++;
	}

	var secondPageFaded = false;
	function fadeSecondPageMsg () {
		$("#secondPageText").fadeTo(800, 0, doNothing);
		secondPageFaded = true;
	}

	function doNothing () {
	}

	// function clearText () {
	// 	var usrname = document.getElementById("username");
	// 	usrname.value = "";
	// 	var usrname = document.getElementById("passw");
	// 	usrname.value = "";
	// }
	
});