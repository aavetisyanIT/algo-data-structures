const arr = [1, 2];

//forEach()
//This method can help you to loop over array’s items.

Array.prototype.myForEach = function (callBack) {
	for (let i = 0; i < this.length; i++) {
		callBack(this[i], i, this);
	}
};

// console.log(
// 	arr.myForEach((el, index, array) => {
// 		console.log(`Element: ${el} at index: ${index} of array: ${array}`);
// 	}),
// );

//map
//This method create new array by calling the provided function in every element.

Array.prototype.myMap = function (callBack) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(callBack(this[i], i, this));
	}
	return result;
};

// console.log(
// 	arr.myMap((el, index, array) => {
// 		console.log(`Element: ${el} at index: ${index} of array: ${array}`);
// 	}),
// );

//includes()
// This method check if array includes the item passed in the method.

Array.prototype.myIncludes = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		} else {
			continue;
		}
	}
	return false;
};

// console.log(arr.myIncludes(5));

//filter()
//This method create new array with only elements passed condition inside the provided function.

Array.prototype.myFilter = function (callBack) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		if (callBack(this[i], i, this)) {
			result.push(this[i]);
		}
	}
	return result;
};

//console.log(arr.myFilter(el => el >= 3));

//reduce
//The reduce() method applies a function against an accumulator
//and each element in the array (from left to right) to reduce it to a single value

Array.prototype.myReduce = function (callBack, initialValue) {
	let accumulator = null;
	let startIndex = 0;

	if (initialValue === undefined) {
		accumulator = this[0];
		startIndex = 1;
	} else {
		accumulator = initialValue;
	}

	for (let i = startIndex; i < this.length; i++) {
		accumulator = callBack(accumulator, this[i], i, this);
	}
	return accumulator;
};

//console.log(arr.myReduce((total, el) => total + el, 1));

//some()
//This method check if at least one of array’s item passed the condition.
//If passed, it return ‘true’ otherwise ‘false’.

Array.prototype.mySome = function (callBack) {
	for (let i = 0; i < this.length; i++) {
		if (callBack(this[i], i, this)) {
			return true;
		}
	}
	return false;
};

// console.log(arr.mySome(el => el == '2'));

//every
//This method check if all elements in array pass the condition
//If padded, it returns true otherwise false

Array.prototype.myEvery = function (callBack) {
	for (let i = 0; i < this.length; i++) {
		if (!callBack(this[i], i, this)) {
			return false;
		}
	}
	return true;
};

//console.log(arr.myEvery(el => el < 15));

//push
//This method adds one or more elements to the end of array and returns the new length of the array.

Array.prototype.myPush = function (...args) {
	let arrayLength = this.length;
	for (let i = 0; i < args.length; i += 1) {
		this[arrayLength + i] = args[i];
	}
	return this.length;
};

// console.log(arr.myPush(3, 4));
// console.log(arr);
