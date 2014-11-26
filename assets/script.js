$(document).ready(function(){
	
	document.getElementById("button1").addEventListener("click", method1);
	document.getElementById("button2").addEventListener("click", cycleMsg);

	document.getElementById("msg1").style.display = 'block';

	function method1 () {
		document.getElementById("secondPageEverything").style.display = 'block';
		document.getElementById("button1").style.display = 'none';
	}

	// $("#secondPageEverything").css("display", "block");
	// $(".secondPageEverything").show();

	// $("#box").removeClass("bounce");

	function cycleMsg () {
	}

	// function clearText () {
	// 	var usrname = document.getElementById("username");
	// 	usrname.value = "";
	// 	var usrname = document.getElementById("passw");
	// 	usrname.value = "";
	// }
	
});