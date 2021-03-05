//Implement the 'weave' function.
//Weave receives two queues as arguments and combines
//the contents of each into a new, third queue.
//The third queue should contain the *alterating* content of the two queues.
//The function should handle queues of different lengths
//without inserting  'undefined' into the new one.
//*Do not* access the array inside of any queue,
//only use the 'add', 'remove', and 'peek' functions.

const weave = (sourceOne, sourceTwo) => {
	const weavedQueue = new Queue();

	while (sourceOne.peek() || sourceTwo.peek()) {
		if (sourceOne.peek()) {
			weavedQueue.add(sourceOne.remove());
		}
		if (sourceTwo.peek()) {
			weavedQueue.add(sourceTwo.remove());
		}
	}
	return weavedQueue;
};
