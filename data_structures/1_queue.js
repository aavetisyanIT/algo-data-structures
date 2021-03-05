class Queue {
	constructor() {
		this.data = [];
	}
	add(record) {
		this.data.unshift(data);
	}
	remove() {
		return this.data.pop();
	}
	peek() {
		return this.data[this.data.length - 1];
	}
}
