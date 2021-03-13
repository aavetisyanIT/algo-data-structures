class LinkedList {
	constructor() {
		this.head = null;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		if (!this.head) return null;

		let node = this.head;

		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}
	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}
}
