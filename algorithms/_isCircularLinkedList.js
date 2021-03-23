//Given linked list, return true if the list is circle.

const isCircularLinkedList = list => {
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
