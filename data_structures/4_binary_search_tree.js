class BinarySearchTreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
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
