const arr = [8, 3, 2, 5, 6, 8, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;

// Go through the array, find the index of the lowest element swap the lowest element with the first element.
//Hence first element is the lowest element in the array.
// Now go through the rest of the array (excluding the first element)
//and find the index of the lowest and swap it with the second element.
// thats how it continues to select (find out) the lowest element of the array
//and putting it on the left until it hits the last element.
const selectionSort = array => {
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] < array[indexMin]) {
				indexMin = j;
			}
			count++;
		}
		//swap the lowest element with the first element
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
};

console.log(selectionSort(arr));
console.log(`Count is ${count}`);
//O(n^2) Quadratic time
