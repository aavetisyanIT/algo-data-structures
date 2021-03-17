class BinarySearchTreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	insert(data) {
		if (this.data >= data) {
			return this.left
				? this.left.insert(data)
				: (this.left = new BinarySearchTreeNode(data));
		} else if (this.data < data) {
			return this.right
				? this.right.insert(data)
				: (this.right = new BinarySearchTreeNode(data));
		}
	}
	contains(data) {
		if (this.data === data) return this;
		if (this.data > data) {
			return this.left ? this.left.contains(data) : null;
		} else if (this.data < data) {
			return this.right ? this.right.contains(data) : null;
		}
	}
}
