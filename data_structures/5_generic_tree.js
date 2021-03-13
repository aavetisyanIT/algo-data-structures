class GenericTree {
	constructor() {
		this.root = null;
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
