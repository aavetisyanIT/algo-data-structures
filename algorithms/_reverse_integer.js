//Given an integer, return an integer that is the reverse ordering of numbers

const reverseInt = num => {
	let string = num
		.toString()
		.split('')
		.reduce((rev, char) => char + rev, '');
	return parseInt(string) * Math.sign(num);
};

console.log(reverseInt(-500));
