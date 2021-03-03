const array = [8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 11, 12, 13, 14, 15];
let count = 0;

const binarySearch = (array, item) => {
	let start = 0;
	let end = array.length - 1;
	let middle = null;
	let found = false;
	let position = -1;
	while (found === false && start <= end) {
		count++;
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			found = true;
			position = middle;
			return position;
		}
		if (item < array[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}
	return position;
};

console.log(binarySearch(array, 13));
console.log(`Count is ${count}`);
//O(lon(n)) logarithmic time
