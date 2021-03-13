/*
Write a function that accepts a string.  
The function should capitalize the first 
letter of each word in the string then return the capitalized string.
*/

const capitalize = str => {
	const wordsArr = str.split(' ');
	const result = [];

	for (let word of wordsArr) {
		result.push(word[0].toUpperCase() + word.slice(1));
	}
	return result.join(' ');
};

console.log(capitalize('hello world'));
