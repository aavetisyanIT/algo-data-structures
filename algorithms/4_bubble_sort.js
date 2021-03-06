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

let count = 0;

const bubbleSort = array => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j + 1] < array[j]) {
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
			count++;
		}
	}
	return array;
};

console.log(`array length: ${arr.length}`);
console.log(bubbleSort(arr));
console.log(`count: ${count}`);

//O(n^2)
