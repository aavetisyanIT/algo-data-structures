// Write a function that accepts a positive number N.
// The function should console log a pyramid shape with N levels using the # character.
// Make sure the pyramid has spaces on both the left *and* right hand sides

let counter = 0;

const pyramid = n => {
	//create a steps
	for (let column = 1; column <= n; column++) {
		let step = '';

		//create each step
		for (let row = 1; row <= n * 2 - 1; row++) {
			counter++;
			if (row <= n - column || row >= n + column) {
				step += ' ';
			} else step += '#';
		}
		//print each step
		console.log(step);
	}
};

pyramid(5);
console.log(counter);
//O(n lon(n))
