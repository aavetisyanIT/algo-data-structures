const matrix = n => {
	const result = [];
	for (let i = 0; i < n; i++) {
		result.push([]);
	}

	let counter = 1;
	let startColumn = 0;
	let endColumn = n - 1;
	let startRow = 0;
	let endRow = n - 1;

	while (startColumn <= endColumn && startRow <= endRow) {
		//top side
		for (let i = startColumn; i <= endColumn; i++) {
			result[startRow][i] = counter;
			counter++;
		}
		startRow++;
		//right side
		for (let i = startRow; i <= endRow; i++) {
			result[i][endColumn] = counter;
			counter++;
		}
		endColumn--;
		//bottom side
		for (let i = endColumn; i >= startColumn; i--) {
			result[endRow][i] = counter;
			counter++;
		}
		endRow--;
		//left side
		for (let i = endRow; i >= startRow; i--) {
			result[i][startColumn] = counter;
			counter++;
		}
		startColumn++;
	}

	console.table(result);
};

matrix(5);
