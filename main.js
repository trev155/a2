/* Main page stuff */

console.log("Main page");

// declarations
var radio1, radio2, submitButton;
var level;
var highScoreText;
var highScore1, highScore2;

// get DOM objects
radio1 = document.getElementById("radio1");
radio2 = document.getElementById("radio2");
submitButton = document.getElementById("submit-button");
highScoreText = document.getElementById("high-score");

// attach event handlers to detect when user clicks on them
radio1.addEventListener("click", levelSelect);
radio2.addEventListener("click", levelSelect);
submitButton.addEventListener("click", gamePage);


// set high scores if they do not exist yet. update if they do
if (localStorage.getItem("highScore1") === null) {
	highScore1 = 0;
}
else {
	highScore1 = localStorage.getItem("highScore1");
}

if (localStorage.getItem("highScore2") === null) {
	highScore2 = 0;
}
else {
	highScore2 = localStorage.getItem("highScore2");
}

levelSelect();
// Run code when radio button is clicked
function levelSelect() {
	updateScore();
	if (radio1.checked) {
		level = 1;
	}
	else if (radio2.checked) {
		level = 2;
	}
}

// Go to the game page - note that this function is attached
// to a click handler on a link element
function gamePage() {
	localStorage.setItem("level", level);
}

// Display high score for the currently selected level
function updateScore() {
	if (radio1.checked) {
		highScoreText.innerText = highScore1;
	}
	else {
		highScoreText.innerText = highScore2;
	}
}


