// Constructor to make bugs
function Bug(speed, x, y, w, h, colour, score) {
    this.x = x,
    this.y = y,
    this.w = w,
    this.h = h,
    this.speed = speed,
    this.colour = colour,
    this.score = score
}

Bug.prototype.type = "Bug";


/* Create a bug (randomly as specified in the assignment) */
function makeBug() {
    var colour, speed, score, x, y;
    var width = 10;
    var height = 10;

    // Random generation of bug type
    var randomChoice = getRandomIntInclusive(1, 10);
    if (randomChoice <= 3) {
        colour = "black";
        speed = 150;
        score = 5;
    }
    else if (randomChoice > 3 && randomChoice <= 6) {
        colour = "red";
        speed = 75;
        score = 3;
    }
    else {
        colour = "orange";
        speed = 60;
        score = 1;
    }

    if (level === 2) {
        speed = speed * (3 / 2);
    }

    // Random generation of x spawn location
    x = getRandomIntInclusive(10, 390);

    // y spawn will be fixed right below the info bar

    var bug = new Bug(speed, x, 60, width, height, colour, score);
    bugList.push(bug);

}

/* bug: A bug object. */
function drawBug(bug) {
    var colour = bug.colour;
    var x = bug.x;
    var y = bug.y;
    var width = bug.w;
    var height = bug.h;

    // Set the colour
    context.fillStyle = colour;
    context.strokeStyle = colour;

    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x+(width/2), y+(height/2), x+(width/2), y+(height/2), x, y+width);
    context.bezierCurveTo(x-(width/2), y+(height/2), x-(width/2), y+(height/2), x, y);
    context.stroke();
    context.fill();
    context.moveTo(x, y);
    context.arc(x, y+(height+1), (height/2)-2, 0, Math.PI*2, true);
    context.fill();
    context.closePath();

    // Reset to black
    context.fillStyle = "black";
    context.strokeStyle = "black";
}



