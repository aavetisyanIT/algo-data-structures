//Given a string, return the character
//that is most commonly used in the string.

let count = 0;

const findMostCommonChar = str => {
	const strMap = {};

	for (let char of str) {
		strMap[char] = strMap[char] + 1 || 1;
		count++;
	}

	let maxChar = '';
	let maxValue = 0;

	for (let key in strMap) {
		count++;

		if (strMap[key] >= maxValue) {
			maxChar = key;
			maxValue = strMap[key];
		}
	}
	return maxChar;
};
