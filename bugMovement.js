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

/* Determine the closest food between bug and all the food left on the canvas. */
function closestFood(bug, foodList) {
	
}

