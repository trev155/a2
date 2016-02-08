/* Main javascript code */
/* Credit for base code:
http://www.isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing#starting-stopping
(look at the last example)
*/

/* GLOBALS */

// retrieve level from level select page
var level = localStorage.level;
bugList = [];
foodList = [];
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var timeElapsed = 0;
var bugTimer = 3;
var userScore = 0;

<<<<<<< HEAD
var resetButton = document.getElementById("reset-button");
var quitButton = document.getElementById("quit-button");

// important stuff for game timer and main loop
var fpsDisplay = document.getElementById('fpsDisplay'),
    lastFrameTimeMs = 0,
    maxFPS = 60,
    delta = 0,
    timestep = 1000 / 60,
    fps = 60,
    framesThisSecond = 0,
    lastFpsUpdate = 0,
    running = false,
    started = false,
    frameID = 0;



=======
// Debugging
document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    var box = document.getElementById("mouseCoords");
    box.textContent = "X: " + x + " Y: " + y;
};


/* BEFORE MAIN LOOP RUN CODE */

// make food
for (var i = 0; i < 5; i++) {
    makeFood();
}
>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7

// Set level text
var levelText = document.getElementById("level-text");
levelText.innerText = "Level: " + level;


/* BEFORE MAIN LOOP RUN CODE */

// make food
foodInit(5);

<<<<<<< HEAD
// Set level text
var levelText = document.getElementById("level-text");
levelText.innerText = "Level: " + level;




=======
>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7
/* START MAIN LOOP */
start();


/* MAIN LOOP VERY IMPORTANT 
Essentially this runs on every frame. 

timestamp: What you would expect, the time that this function was invoked
(automatically passed as a parameter to requestAnimationFrame
*/
function mainLoop(timestamp) {
    // Throttle the frame rate.    
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        frameID = requestAnimationFrame(mainLoop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    begin(timestamp, delta);

    if (timestamp > lastFpsUpdate + 1000) {
        fps = 0.25 * framesThisSecond + 0.75 * fps;

        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;

    var numUpdateSteps = 0;
    while (delta >= timestep) {
        boxUpdate(timestep);
        delta -= timestep;
        if (++numUpdateSteps >= 240) {
            panic();
            break;
        }
    }

    // Animation of box (will remove later)
    drawBox(delta / timestep);

    /* ADDED */

    // Bug generation at random intervals
    if (timeElapsed / 1000 > bugTimer) {
        var num = getRandomIntInclusive(1, 3);
        makeBug();
        bugTimer += num;
        //bugTimer = 100000000;
    }

<<<<<<< HEAD
    // Bug movement and calculations
    for (var i = 0; i < bugList.length; i++) {
        moveBugs(bugList[i], foodList);
    }

    // if bug collides with a food item, remove the food item
    for (var i = 0; i < bugList.length; i++) {
        for (var j = 0; j < foodList.length; j++) {
            if (collisionDetect(bugList[i], foodList[j])) {
                foodList.splice(j, 1);
            }
        }
    }



    // clear the whole canvas area 
    context.clearRect(0, 0, canvas.width, canvas.height);
    // make / draw info bar and components
    makeInfoBar();
    // draw the food
    for (var i = 0; i < foodList.length; i++) { drawFood(foodList[i]); }
=======

    // Bug movement and calculations
    for (var i=0; i < bugList.length; i++) {
        
    }    



>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7
    // draw the bugs
    for (var i = 0; i < bugList.length; i++) {
        drawBug(bugList[i]);
    }

<<<<<<< HEAD

    // after removal of a food item - may end up with none left
    // if so, game over
    if (foodList.length === 0) {
        stop();
        gameOver();
        return;
    }
=======
>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7

    // Keep track of time (if > 60 seconds, end)
    timeElapsed = lastFrameTimeMs;
    if (timeElapsed / 1000 > 60) {
        stop();
        gameOver();
        return;
    }

    /* END OF ADDED */


    // end(fps);
    // go to next frame
    frameID = requestAnimationFrame(mainLoop);
}



// Run this code when the game is over (either player lose or time elapsed)
<<<<<<< HEAD
// also update the high scores
=======
>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7
function gameOver() {
    console.log("Game over");
    // recall that level is a string so use == not ===
    if (level == 1) {
<<<<<<< HEAD
        var currentHigh = localStorage.getItem("highScore1");
        if (currentHigh < userScore) {
            localStorage.setItem("highScore1", userScore);
        }
    }
    else if (level == 2) {
        var currentHigh = localStorage.getItem("highScore2");
        if (currentHigh < userScore) {
            localStorage.setItem("highScore2", userScore);
        }
    }
=======
        localStorage.setItem("highScore1", userScore);
    }
    else if (level == 2) {
        localStorage.setItem("highScore2", userScore);
    }
}


>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7

    showGameOverButtons();
}



/* HELPERS */


<<<<<<< HEAD
=======
/* UTILITY FUNCTIONS (from web source) */
>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7

/* UTILITY FUNCTIONS (from web source) */
/* Start the main loop */
function start() {
    if (!started) {
        started = true;
        frameID = requestAnimationFrame(function(timestamp) {
            drawBox(1); // to remove
            running = true;
            lastFrameTimeMs = timestamp;
            lastFpsUpdate = timestamp;
            framesThisSecond = 0;
            frameID = requestAnimationFrame(mainLoop);
        });
    }
}
/* Stop The main loop */
function stop() {
    running = false;
    started = false;
    cancelAnimationFrame(frameID);
    /* Added */
    // need to re-make info bar so that the pause/play symbol switches
    makeInfoBar();
}
// Runs at the start of each frame
function begin() {}
// Runs at the end of each frame
function end(fps) {}
// if frame rate goes to shit or something like that, do this
function panic() {delta = 0; }


/* OTHER HELPERS */
// rng calculator
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// restart the game (invoked as an event listener)
function reset() {
    timeElapsed = 0;
    userScore = 0;
    bugTimer = 3;
    bugList = [];
    foodList = [];
    foodInit(5);
    start();

    hideGameOverButtons();
}




function showGameOverButtons() {
    resetButton.className = "show";
    quitButton.className = "show";

    resetButton.addEventListener("click", reset);
}

function hideGameOverButtons() {
    resetButton.className = "hide";
    quitButton.className = "hide";
}

<<<<<<< HEAD
// click Functions

// Event Listener
canvas.addEventListener("click", canvasClicked, false);

// Run this function when the canvas is clicked
// Loop over the bugList, remove the entries that are within the click radius
function canvasClicked(e) {
    for (var i = 0; i < bugList.length; i++) {
        // midpoint of box
        var bugX = bugList[i].x + bugList[i].w;
        var bugY = bugList[i].y + bugList[i].h;
        var radius = 15;
        if (clickRadius(e.offsetX, e.offsetY, bugX, bugY, radius)) {
            userScore += bugList[i].score;
            bugList.splice(i, 1);
        }
    }
}

// return true iff (x,y) is within radius of (bugX, bugY)
function clickRadius(offsetX, offsetY, bugX, bugY, radius) {
    x1 = offsetX;
    y1 = offsetY;
    x2 = bugX;
    y2 = bugY;
    if (Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2)) < radius) {
        return true;
    }
    else {
        return false;
    }
}





// Debugging
document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;
    var box = document.getElementById("mouseCoords");
    box.textContent = "X: " + x + " Y: " + y;
};

// box stuff (will remove after)
var box = document.getElementById('box'),
    boxPos = 10,
    boxLastPos = 10,
    boxspeed = 0.4,
    limit = 300;


/* Box Functions (will remove later)*/
function boxUpdate(delta) {
    boxLastPos = boxPos;
    boxPos += boxspeed * delta;
    // Switch directions if we go too far
    if (boxPos >= limit || boxPos <= 0) boxspeed = -boxspeed;
}

function drawBox(interp) {
    box.style.left = (boxLastPos + (boxPos - boxLastPos) * interp) + 'px';
    fpsDisplay.textContent = Math.round(fps) + ' FPS';
=======
/* OTHER HELPERS */

// rng calculator
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
>>>>>>> 0b3a34ea97aa440c7ebf6f8f18828d5ea6cb7cf7
}