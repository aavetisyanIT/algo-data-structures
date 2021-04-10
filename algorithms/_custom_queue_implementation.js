import Stack from '../data_structures/2_stack';

class CustomQueue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}

	add(data) {
		this.first.push(data);
	}
	remove() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const result = this.second.pop();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return result;
	}
	peek() {
		while (this.first.peek()) {
			this.second.push(this.first.pop());
		}

		const result = this.second.peek();

		while (this.second.peek()) {
			this.first.push(this.second.pop());
		}

		return result;
	}
}
