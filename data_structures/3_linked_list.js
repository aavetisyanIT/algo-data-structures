class LinkedList {
	constructor() {
		this.head = null;
	}
	clear() {
		this.head = null;
	}
	removeFirst() {
		if (!this.head) return;
		return (this.head = this.head.next);
	}
	removeLast() {
		if (!this.head) return;
		if (!this.head.next) return (this.head = null);

		let previous = this.head;
		let node = previous.next;

		while (node) {
			if (!node.next) {
				previous.next = null;
			}
			previous = node;
			node = node.next;
		}
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
	removeAt(index) {
		if (!this.head) return;
		if (index === 0) {
			return (this.head = this.head.next);
		}
		const previous = this.getAt(index - 1);
		//handle cases where index is greater then list length and
		//index is greater then length by 1
		if (!previous || !previous.next) return;
		previous.next = previous.next.next;
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
	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}
