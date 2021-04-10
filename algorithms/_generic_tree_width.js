/*
Given a root node of the generic tree, 
return an array where each element is the width of the tree at each level.
*/

const width = node => {
	const result = [0];
	const arrayHolder = [node, 's'];

	while (arrayHolder.length > 1) {
		let node = arrayHolder.shift();

		if (node === 's') {
			arrayHolder.push('s');
			result.push(0);
		} else {
			arrayHolder.push(...node.children);
			result[result.length - 1]++;
		}
	}

	return result;
};
