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

	var score = 0;
	$( "#redDot" ).click(function() {
		// alert( "Handler for .click() called." );
		if (!secondPageFaded) {
			fadeSecondPageMsg();
		}
		var newLeft = Math.random() * .9 + .05;
		var newTop = Math.random() * .9 + .05;
		$("#redDot").css("left", 100 * newLeft + "%");
		$("#redDot").css("top", 100 * newTop + "%");
		score++;
		$("#score").text("Score: " + score);

		switch (score) {
			case 3:
				pingMessage("Got the hang of it?");
				break;
			case 5:
				pingMessage("Not bad");
				break;
			case 9:
				pingMessage("Ok, you can stop.");
				break;
			case 11:
				pingMessage("Seriously....");
				break;
			case 13:
				pingMessage("Did you... not get the message?");
				break;
			case 15:
				pingMessage("Think from the dot's point of view.");
				break;
			case 18:
				pingMessage("Don't you have something better to do....");
				break;
			case 21:
				pingMessage("Please... stop.... it hurts...");
				break;
			case 25:
				pingMessage("Dude you must have no life");
				break;
			case 29:
				pingMessage("LOL go do your homework.... and leave me alone QQ");
				break;
			case 34:
				pingMessage("Bruh! Pls! -Anusha");
				break;
			case 40:
				pingMessage("Jerry Cheng would not be proud. Nor would Josh Hug.");
				break;
			case 50:
				pingMessage("Aren't you so amazing?? You made it to half-friggin-100");
				break;
			case 69:
				pingMessage("Tickle someone else's balls ._.");
				break;
			case 100:
				pingMessage("Wanna hear a joke? There's more content later on.");
				break;
			default:
		}
	});

	function pingMessage (str) {
		$("#secondPageText").text(str);
		$("#secondPageText").fadeTo(1000, 1, doNothing());
		$("#secondPageText").fadeTo(1000, 0, doNothing());
	}

	function prepareForPings () {
		$("#secondPageText").css("opacity", 0);
	}

	var secondPageFaded = false;
	function fadeSecondPageMsg () {
		$("#secondPageText").fadeTo(800, 0, doNothing);
		secondPageFaded = true;
		$("#secondPageText").css("opacity", 0);
		prepareForPings();
	}

	function doNothing () {
	}

	var currMsg = 1;
	function cycleMsg () {
		if (currMsg >= 10)
			return false;
		$("#msg" + currMsg).fadeTo(400, 1, doNothing());
		currMsg++;
		var rnd = Math.random();
		var rating = "";
		if (rnd < .1) {
			rating = "F";
		} else if (rnd < .1) {
			rating = "C-";			
		} else if (rnd < .2) {
			rating = "C";			
		} else if (rnd < .4) {
			rating = "C+";			
		} else if (rnd < .5) {
			rating = "B-";			
		} else if (rnd < .6) {
			rating = "B";			
		} else if (rnd < .7) {
			rating = "B+";			
		} else if (rnd < .8) {
			rating = "A-";			
		} else if (rnd < .9) {
			rating = "A";			
		} else if (rnd < 1) {
			rating = "A+";			
		}
		$("#truthfulness").text("Your truthfulness rating: " + rating);
	}


	$( ".checkX" ).click(function() {
		$("#hacktypeOverlay").hide();
	});

	$("#terminalBox").click(function() {
		$("#hacktypeOverlay").show();
	});

	// function clearText () {
	// 	var usrname = document.getElementById("username");
	// 	usrname.value = "";
	// 	var usrname = document.getElementById("passw");
	// 	usrname.value = "";
	// }
	
});