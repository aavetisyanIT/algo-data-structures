const isCircular = list => {
	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (fast === slow) {
			return true;
		}
	}
	return false;
};
