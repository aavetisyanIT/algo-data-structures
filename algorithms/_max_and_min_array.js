/*
Find the largest and smallest number in an unsorted array of integers
Return: object — containing value of min and max
*/
const arr = [1, 2, 3, 4, 100];

const findMaxMin = array => {
	let max = array[0];
	let min = array[0];

	for (let num of array) {
		console.log(num);
		if (num >= max) {
			max = num;
		} else if (num <= min) {
			min = num;
		}
	}
	return {
		max: max,
		min: min,
	};
};

console.log(findMaxMin(arr));
//linear time complexity
