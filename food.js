// Constructor to make food items
function Food(x, y, w, h) {
	this.colour = "blue";
    
    this.x = x,
    this.y = y,
    this.w = w,
    this.h = h
}

Food.prototype.type = "Food";

// Create a piece of food (has to be in the bottom half of the canvas)
function makeFood() {
	var x, y, w, h;
	x = getRandomIntInclusive(10, 390);
	y = getRandomIntInclusive(canvas.height / 2, canvas.height - 10);
	w = 10;
	h = 10;

	var food = new Food(x, y, w, h);
	foodList.push(food);
}

/* Draw food on the canvas */
function drawFood(food) {
	var colour = food.colour;
    var x = food.x;
    var y = food.y;
    var width = food.w;
    var height = food.h;

    // Set the colour
    context.fillStyle = colour
    context.fillRect(x, y, width, height);
}

// populate the foodList array with num amount of food objects
function foodInit(num) {
    for (var i = 0; i < num; i++) {
        makeFood();
    }
}