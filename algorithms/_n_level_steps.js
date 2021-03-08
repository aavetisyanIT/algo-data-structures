/*
Write a function that accepts a positive number N. 
The function should console log a step shape with N levels using the # character.  
Make sure the step has spaces on the right hand side. 
*/

let counter = 0;

//Iterative solution
const steps = n => {
	//build steps
	for (let row = 0; row < n; row++) {
		let stair = '';
		//build each stair
		for (let column = 0; column < n; column++) {
			if (column <= row) {
				stair += '#';
			} else {
				stair += ' ';
			}
			counter++;
		}
		console.log(stair);
	}
};

// steps(10);
// console.log(counter);
//O(n^2)

//Recursive solution

const recSteps = (n, row = 0, stair = '') => {
	counter++;
	if (row === n) return;
	if (stair.length === n) {
		console.log(stair);
		return recSteps(n, row + 1);
	}
	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	recSteps(n, row, stair);
};

recSteps(10);
console.log(counter);
//O(n^2)
