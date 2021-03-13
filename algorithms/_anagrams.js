/*
Check to see if two provided strings are anagrams of eachother. 
One string is an anagram of another if it uses the same characters in the same quantity. 
Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case
*/

const anagrams = (strA, strB) => {
	return cleanStr(strA) === cleanStr(strB);
};

const cleanStr = str => {
	const cleanedStr = str
		.toLowerCase()
		.replace(/[^\w]/g, '')
		.split('')
		.sort();
	return cleanedStr.join('');
};

console.log(anagrams('Hello World!!!', 'hello wodlr'));
