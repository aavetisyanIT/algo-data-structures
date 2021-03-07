// The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two

// Iterative
let counter = 0;

const fibonacci = n => {
	const result = [0, 1];

	for (let i = 2; i <= n; i++) {
		counter++;
		result.push(result[i - 1] + result[i - 2]);
	}

	return result[n];
};

// console.log(fibonacci(30));
// console.log(counter);
// O(n)
// Recursive

const recFibonacci = n => {
	counter++;
	if (n < 2) return n;
	return recFibonacci(n - 1) + recFibonacci(n - 2);
};

console.log(recFibonacci(30));
console.log(counter);
// O(2^n)
