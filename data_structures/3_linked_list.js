class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

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
	insertAt(data, index) {
		if (!this.head) return (this.head = new Node(data));
		if (index === 0) {
			return (this.head = new Node(data, this.head));
		}
		const previous = this.getAt(index - 1) || this.getLast();
		previous.next = new Node(data, previous.next);
	}
	insertLast(data) {
		const last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
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
	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}
