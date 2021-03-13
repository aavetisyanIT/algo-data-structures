/* 
Write a function that returns the number of vowels used in a string.  
Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
*/

const vowels = str => {
	const checker = ['a', 'e', 'i', 'o', 'u'];
	let counter = 0;
	for (let char of str.toLowerCase()) {
		if (checker.includes(char)) {
			counter++;
		}
	}
	return counter;
};

console.log(vowels('hello world'));
