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

class GenericTree {
	constructor() {
		this.root = null;
	}
	breadthFirstTraversal(fn) {
		const arrayHolder = [this.root];

		while (arrayHolder.length) {
			let node = arrayHolder.shift();
			arrayHolder.push(...node.children);
			fn(node);
		}
	}

	depthFirstTraversal(fn) {
		const arrayHolder = [this.root];

		while (arrayHolder.length) {
			let node = arrayHolder.shift();
			arrayHolder.unshift(...node.children);
			fn(node);
		}
	}
}
