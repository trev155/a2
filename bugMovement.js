/* Functions and things for determining bug movement. */

/* Calculate the distance between 2 objects, where their position on canvas
is defined by:
(x, y) point
width, height
Take euclidean distance between the centers of the 2 objects
*/
function calculateDistance(obj1, obj2) {
	var x1, x2, y1, y2;
	x1 = obj1.x + (obj1.w / 2);
	x2 = obj2.x + (obj2.w / 2);
	y1 = obj1.y + (obj1.h / 2);
	y2 = obj2.y + (obj2.h / 2);

	return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
}

/* Determine the closest food between bug and all the food left on the canvas. 
Return the Food object in foodList that was the closest to this bug
*/
function closestFood(bug, foodList) {
	var allDistances = []

	for (var i=0; i < foodList.length; i++) {
		var entry = [];
		entry.push(calculateDistance(bug, foodList[i]));
		entry.push(foodList[i]);
		allDistances.push(entry);
	}


	allDistances.sort(function(a, b) {
		if (a[0] < b[0]) {
			return -1;
		}
		else {
			return 1;
		}
	});

	// return the food object that was the closest to this bug
	return allDistances[0];
}


/* move bug to closest food in foodList */
function moveBugs(bugList, foodList) {

	// all projected positions
	var allProjectedPositions = [];

	for (var i = 0; i < bugList.length; i++) {
		// array of: [distance, Food]
		var closest = closestFood(bugList[i], foodList);

		// array of: [x, y]
		var nextPosition = projectedPosition(bugList[i], closest[1]);

		// if this [x, y] violates any other [x, y] in allProjectedPositions,
		// don't move the bug
		if (!violatesProjectedPosition(allProjectedPositions, nextPosition)) {
			bugMove(bugList[i], closest[1]);
		}

		allProjectedPositions.push(nextPosition);
	}
}

/* Compare the projected position of the bug with all the other projected bug positions. 
If there is a violation, don't move the bug. 
This fn returns true iff the bug represented by nextPos will collide with any other bug. 
allPos: list of [[x,y]]
nextPos: [x,y] */
function violatesProjectedPosition(allPos, nextPos) {
	var toReturn = false;
	var radius = 20;

	for (var i = 0; i < allPos.length; i++) {
		if (Math.abs(allPos[i][0] - nextPos[0]) < radius && Math.abs(allPos[i][1] - nextPos[1]) < radius) {
			toReturn = true;	
			console.log("YES");
		}
	}
	return toReturn;
}


/* Compute the expected position of this bug on the next frame. */
function projectedPosition(bug, food) {
	var nextPosition = [bug.x, bug.y];
  	
  var speed = 1;
 	if (bug.x < food.x) {
 		nextPosition[0] += speed;
 	} 
 	else if (bug.x > food.x) {
 		nextPosition[0] -= speed;
 	}

 	if (bug.y < food.y) {
 		nextPosition[1] += speed;
 	}
 	else if (bug.y > food.y) {
 		nextPosition[1] -= speed;
 	}

 	return nextPosition;
}

/* Move bug closer to the food item */
function bugMove(bug, food) {
	var speed = bug.speed / 100;

	if (bug.x < food.x) {
		bug.x += speed;
	}
	else if (bug.x > food.x) {
		bug.x -= speed;
	}
	if (bug.y < food.y) {
		bug.y += speed;
	}
	else if (bug.y > food.y) {
		bug.y -= speed;
	}
}


function collisionDetect(obj1, obj2) {
	var isColliding = false; 
	var p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y, xLeft, xRight, yTop, yBot;

	xLeft = obj1.x;
	xRight = obj1.x + obj1.w;
	yTop = obj1.y;
	yBot = obj1.y + obj1.h;

	p1x = obj2.x;
	p1y = obj2.y;
	p2x = obj2.x + obj2.w;
	p2y = obj2.y;
	p3x = obj2.x;
	p3y = obj2.y + obj2.h;
	p4x = obj2.x + obj2.w;
	p4y = obj2.y + obj2.h;

	if (isBetween(p1x, p1y, xLeft, xRight, yTop, yBot)) {
		isColliding = true;
	}
	else if (isBetween(p2x, p2y, xLeft, xRight, yTop, yBot)) {
		isColliding = true;
	}
	else if (isBetween(p3x, p3y, xLeft, xRight, yTop, yBot)) {
		isColliding = true;
	}
	else if (isBetween(p4x, p4y, xLeft, xRight, yTop, yBot)) {
		isColliding = true;
	}


	return isColliding;
}

/* Return true iff the point defined by (px, py) is within the bounds 
of the rectangle defined by xLeft, xRight, yTop, yBot */
function isBetween(px, py, xLeft, xRight, yTop, yBot) {
	return (px >= xLeft && px <= xRight && py >= yTop && py <= yBot);
}
