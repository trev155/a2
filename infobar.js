/* This script makes the info bar and all the 
associated features:
- pause/play button
- timer
- score
*/


/* Make the info bar and all its associated elements */
function makeInfoBar() {
	var infoBarHeight = 50;
	// Clear the info bar area (so things dont overlap)
	context.clearRect(0, 0, canvas.width, infoBarHeight);

	// Draw the line seperator
	drawInfoBar(infoBarHeight);

	// Draw the seperating lines to distinguish the play/pause button region
	drawSeperator(180, 220, infoBarHeight);

	// Draw a pause button or a play button depending on game state
	if (running) {
		drawPauseButton(195, 20);
	}
	else {
		drawPlayButton(190, 20, 210, 30, 190, 40);
	}

	drawTimer(10, 30);
	drawScore(300, 30);
}

/* Draw info bar at the top of the canvas */
function drawInfoBar(height) {
	context.beginPath();
	context.moveTo(0, height);
	context.lineTo(canvas.width, height);
	context.closePath();
	context.stroke();

}

/* Draw a pause icon. This will just be 2 lines 
(x, y) denotes the top left part of the icon. */
function drawPauseButton(x, y) {
	context.beginPath();
	context.lineWidth = 3;
	context.moveTo(x, y);
	context.lineTo(x, y+20);
	context.moveTo(x+10, y);
	context.lineTo(x+10, y+20);
	context.closePath();
	context.stroke();
	context.lineWidth = 1;

}

/* Draw a play button. This will be a traingle. 
(x1, y1), (x2, y2), (x3, y3) define the points of the triangle. */
function drawPlayButton(x1, y1, x2, y2, x3, y3) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.lineTo(x3, y3);
	context.lineTo(x1, y1);
	context.closePath();
	context.stroke();

}

/* Timer 
(x, y) defines the location where it should be placed. */
// a small issue: timer seems to be slow depending on the fps
function drawTimer(x, y) {
	context.fillStyle = "black";
	context.font = "16px Georgia";
	timeLeftString = "Time Left: " + Math.floor((60 - (timeElapsed / 1000)));
	context.fillText(timeLeftString, x, y);
}

/* Score
(x, y) defines the location where it should be placed */
function drawScore(x, y) {
	context.fillStyle = "black";
	context.font = "16px Georgia";
	scoreString = "Score: " + userScore;
	context.fillText(scoreString, x, y);
}

/* Clearly defines the region for the play/pause button. 
The region is a rectangle,
top left: (x1, 0)
bottom right: (x2, height) */
function drawSeperator(x1, x2, height) {
	context.beginPath();
	context.moveTo(x1, 0);
	context.lineTo(x1, height);
	context.moveTo(x2, 0);
	context.lineTo(x2, height);
	context.stroke();

}
