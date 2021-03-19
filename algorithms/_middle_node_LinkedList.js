/*
Return middle node of a linked list without using counter variable or size method,
only iterate through the list one time. 
If there even number of elements we want to return last element of first half of the list.
*/

const middleNode = list => {
	let slow = list.head;
	let fast = list.head;

	while (fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
};
