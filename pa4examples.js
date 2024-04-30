function displayMessage() {
	document.getElementById("first").innerHTML="Hello, World!";

}

// GLOBAL VARIABLES
// pick a number to be the target to guess
// this is deliberately made a global variable by placing it outside of any function
	let rn = Math.floor(Math.random() * 100 + 1);
	
// start the count
	let turn = 0; 
	
function resetGame() {
	// alert("Resetting");
	guessField.value = "";
	turn = 0;
	document.getElementById("turn").innerHTML="This is guess number " + turn;
	document.getElementById("feedback").innerHTML = "Click the 'Play the Game' button to go again.";
	document.getElementById("guess").innerHTML="";

}

function setGameOver() {
	// alert("Game over!");
	guessField.value = "";


}

function checkGuess() {
//	alert("Check Guess placeholder");
	const userGuess = Number(guessField.value);
	turn = turn + 1;
	document.getElementById("guess").innerHTML="Your guess: " + userGuess;
	document.getElementById("feedback").innerHTML="High, low, or exact shows up here."; 
	document.getElementById("feedback").innerHTML="I know the target is: " + rn;
	 
	if (userGuess === rn) {
		document.getElementById("feedback").innerHTML = "Congratulations! " + userGuess + " is right.";
		setGameOver();
	} else if (turn > 9) {
		document.getElementById("feedback").innerHTML = "Sorry.  You ran out of turns!";
		document.getElementById("turn").innerHTML="This is guess number " + turn;
		setGameOver();
	} else if (userGuess < rn) {
		document.getElementById("feedback").innerHTML = "Sorry. " + userGuess + " is too low. Try again.";
		document.getElementById("turn").innerHTML="This is guess number " + turn;
		guessField.value = "";
		guessField.focus();

	} else if (userGuess > rn ) {
		document.getElementById("feedback").innerHTML = "Sorry. " + userGuess + " is too high.  Try again.";
		document.getElementById("turn").innerHTML="This is guess number " + turn;
		guessField.value = "";
		guessField.focus();

	}
	
}



// the driver function??
function playGMN() {

	// document.getElementById("rn").innerHTML="The target number is " + rn;
	document.getElementById("turn").innerHTML="This is guess number " + turn;
	document.getElementById("feedback").innerHTML = "Ready to get started? Guess a number!";

	
	//get user guess
	const guessField = document.querySelector(".guessField");
	
	

	
}
