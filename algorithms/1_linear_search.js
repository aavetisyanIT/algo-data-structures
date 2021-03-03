const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0;

const linearSearch = (array, item) => {
	for (let i = 0; i <= array.length; i++) {
		count++;
		if (array[i] === item) {
			return i;
		}
	}
};

console.log(linearSearch(array, 3));
console.log(`Count is ${count}`);

//O(n) linear
