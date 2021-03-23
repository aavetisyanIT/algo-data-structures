/*
Find the missing number in a given integer array of 1 to 100
Return: integer — the missing number in the array
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const findMissingNumber = array => {
	for (let i = 0; i <= array.length; i++) {
		if (array[i + 1] !== array[i] + 1) {
			return array[i] + 1;
		}
	}
	return false;
};

console.log(findMissingNumber(arr));
//linear time complexity
