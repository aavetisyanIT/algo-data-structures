/*
Given a string, return true if the string is a palindrome or false if it is not.  
Palindromes are strings that form the same word if it is reversed.
*/

const isPalindrome = str => {
	const reversed = str
		.toLowerCase()
		.split('')
		.reduce((rev, char) => char + rev, '');
	return str.toLowerCase() === reversed;
};

console.log(isPalindrome('Hello'));
console.log(isPalindrome('rotor'));

//O(n)
