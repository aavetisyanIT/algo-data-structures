/*
Given linked list and integer n, return the element n spaces from last node in the list. 
Don’t call size method of the linked list. 
Assume that n will always be less than the length of the list.
*/

const nthElement = (list, n) => {
	let slow = list.head;
	let fast = list.head;

	while (n > 0) {
		fast = fast.next;
		n--;
	}

	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
};
