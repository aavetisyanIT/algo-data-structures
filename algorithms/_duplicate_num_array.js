/*
Find a duplicate number in an array of integers
Return: integer — the duplicate number
Assumptions: if no duplicate is found, return false;
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];

const findDuplicate = array => {
	const observed = {};
	for (let i = 0; i <= array.length; i++) {
		if (observed[array[i]]) {
			return array[i];
		} else {
			observed[array[i]] = array[i];
		}
	}
	return false;
};

console.log(findDuplicate(arr));
//linear time compexity
