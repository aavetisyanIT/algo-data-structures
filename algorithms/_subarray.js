/*
Given an array and chunk size, 
divide the array into many subarrays where 
each subarray is of length size.
*/

const chunkedArray = (array, size) => {
	const chunked = [];

	for (let i = 0; i <= array.length; i = i + size) {
		chunked.push(array.slice(i, i + size));
	}
	return chunked;
};

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
