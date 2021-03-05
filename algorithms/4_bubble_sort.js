// step-1: you compare the first item with the second.
//If the first item is bigger than the second item.
//you swap them so that the bigger one stays in the second position.

// step-2:And then compare second with third item.
//if second item is bigger than the third, we swap them.
//otherwise, they stayed in their position. Hence, the biggest among first three is in the third position.

// step-3:we keep doing it. until we hit the last element of the array.
//In that way we bubble up the biggest item of the array to the right most position of the array.

// step-4: Look at the inner loop in the code below.

// step-5: We repeat this process, starting from the last item of the array.
//look at the outer loop in the code below. We do this way, so that after finishing the first inner loop,
//the biggest one will be in the last item of the array.

// step-6: and then we move backward inside the outer loop.

const arr = [
	8,
	3,
	2,
	5,
	6,
	8,
	1,
	9,
	4,
	2,
	1,
	2,
	9,
	6,
	4,
	1,
	7,
	-1,
	-5,
	23,
	6,
	2,
	35,
	6,
	3,
	32,
];
