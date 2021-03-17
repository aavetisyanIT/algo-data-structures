/*
Given a root node of binary tree, validate the binary search tree,
ensuring that every node’s left-hand child is less than the parent node’s value,
and that every right-hand child is greater than the parent.
*/

const validBinarySearchTree = (
	node,
	min = Number.MIN_SAFE_INTEGER,
	max = Number.MAX_SAFE_INTEGER,
) => {
	if (!this.node) return null;
	if (node.data <= min || node.data >= max) return false;
	return (
		validBinarySearchTree(node.left, min, node.data) &&
		validBinarySearchTree(node.right, node.data, max)
	);
};
