//Slow fibonacci function:
const fibonacci = n => {
	if (n < 2) return n;
	//calling recursively memoized function not slow fib
	return fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
};

//Generic memoizetion function
let count = 0;
const memoize = fn => {
	const cache = {};
	return (...args) => {
		count++;
		if (cache[args]) return cache[args];
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
};

const fibonacciMemoized = memoize(fibonacci);

console.log('====================================');
console.log(fibonacciMemoized(27));
console.log(count);
console.log('====================================');

//time complexity is O(n)
