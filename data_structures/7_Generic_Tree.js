class GenericTree {
	constructor(root = null) {
		this.root = root;
	}
}

class GenericTreeNode {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
	add(data) {
		this.children.push(new GenericTreeNode(data));
	}
	remove(data) {
		this.children = this.children.filter(node => node.data !== data);
	}
}
