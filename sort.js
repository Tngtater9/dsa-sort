function swap(array, i, j) {
	const tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

function bubbleSort(array) {
	let swaps = 0;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			swap(array, i, i + 1);
			swaps++;
		}
	}

	if (swaps > 0) {
		return bubbleSort(array);
	}
	return array;
}

function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle, array.length);

	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right, array);
}

function merge(left, right, array) {
	let leftIndex = 0;
	let rightIndex = 0;
	let outputIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			array[outputIndex++] = left[leftIndex++];
		} else {
			array[outputIndex++] = right[rightIndex++];
		}
	}

	for (let i = leftIndex; i < left.length; i++) {
		array[outputIndex++] = left[i];
	}

	for (let i = rightIndex; i < right.length; i++) {
		array[outputIndex++] = right[i];
	}
	return array;
}

function quickSort(array, start = 0, end = array.length) {
	if (start >= end) {
		return array;
	}
	const middle = partition(array, start, end);
	array = quickSort(array, start, middle);
	array = quickSort(array, middle + 1, end);
	return array;
}

// Lomuto's algorithm:

function partition(array, start, end) {
	const pivot = array[end - 1];
	let j = start;
	for (let i = start; i < end - 1; i++) {
		if (array[i] <= pivot) {
			swap(array, i, j);
			j++;
		}
	}
	swap(array, end - 1, j);
	return j;
}

/*
1. Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

What is the resulting list that will be sorted after 3 recursive calls to mergesort?
[21,1]
What is the resulting list that will be sorted after 16 recursive calls to mergesort?
[16,49,39,27]
What are the first 2 lists to be merged?
[26] and [45]
Which two lists would be merged on the 7th merge?
[1,2,9,21,26,28,29,45] and [16,49,39,27,43,34,46,40]
*/
mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]);
/*
2. Understanding quicksort
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

The pivot could have been either 14 or 17
Without seeing the original array the pivot could have been 14 or 17 because of how the numbers to the left are less than 14 and 17 and, the numbers to the right are greater than 14 and 17

2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

When using the last item on the list as a pivot
9,16,3,10,19,14,13,17,15,12
When using the first item on the list as a pivot
14,12,9,15,3,10,19,16,13,17

3. Implementing quicksort
Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.
*/
console.log(
	quickSort([
		89,
		30,
		25,
		32,
		72,
		70,
		51,
		42,
		25,
		24,
		53,
		55,
		78,
		50,
		13,
		40,
		48,
		32,
		26,
		2,
		14,
		33,
		45,
		72,
		56,
		44,
		21,
		88,
		27,
		68,
		15,
		62,
		93,
		98,
		73,
		28,
		16,
		46,
		87,
		28,
		65,
		38,
		67,
		16,
		85,
		63,
		23,
		69,
		64,
		91,
		9,
		70,
		81,
		27,
		97,
		82,
		6,
		88,
		3,
		7,
		46,
		13,
		11,
		64,
		76,
		31,
		26,
		38,
		28,
		13,
		17,
		69,
		90,
		1,
		6,
		7,
		64,
		43,
		9,
		73,
		80,
		98,
		46,
		27,
		22,
		87,
		49,
		83,
		6,
		39,
		42,
		51,
		54,
		84,
		34,
		53,
		78,
		40,
		14,
		5,
	])
);
/*
4. Implementing merge sort
Write a function mSort that sorts the dataset above using the merge sort algorithm.
*/
console.log(
	mergeSort([
		89,
		30,
		25,
		32,
		72,
		70,
		51,
		42,
		25,
		24,
		53,
		55,
		78,
		50,
		13,
		40,
		48,
		32,
		26,
		2,
		14,
		33,
		45,
		72,
		56,
		44,
		21,
		88,
		27,
		68,
		15,
		62,
		93,
		98,
		73,
		28,
		16,
		46,
		87,
		28,
		65,
		38,
		67,
		16,
		85,
		63,
		23,
		69,
		64,
		91,
		9,
		70,
		81,
		27,
		97,
		82,
		6,
		88,
		3,
		7,
		46,
		13,
		11,
		64,
		76,
		31,
		26,
		38,
		28,
		13,
		17,
		69,
		90,
		1,
		6,
		7,
		64,
		43,
		9,
		73,
		80,
		98,
		46,
		27,
		22,
		87,
		49,
		83,
		6,
		39,
		42,
		51,
		54,
		84,
		34,
		53,
		78,
		40,
		14,
		5,
	])
);
/*
5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.
*/
class _Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}

	insertLast(item) {
		if (this.head === null) {
			this.insertFirst(item);
		} else {
			let tempNode = this.head;
			while (tempNode.next !== null) {
				tempNode = tempNode.next;
			}
			tempNode.next = new _Node(item, null);
		}
	}

	insertBefore(key, item) {
		if (this.head == null || this.head.value === key) {
			this.insertFirst(item);
		} else {
			let currNode = this.head;
			let prevNode = this.head;

			while (currNode.value !== key) {
				prevNode = currNode;
				currNode = currNode.next;
			}
			if (currNode == null) {
				return `${key} not found`;
			}
			prevNode.next = new _Node(item, currNode);
		}
	}

	insertAfter(key, item) {
		if (this.head == null) {
			this.insertFirst(item);
		} else {
			let currNode = this.head;

			while (currNode.value !== key && currNode !== null) {
				currNode = currNode.next;
			}
			if (currNode == null) {
				return `${key} not found`;
			}
			currNode.next = new _Node(item, currNode.next);
		}
	}

	insertAt(position, item) {
		if (this.head == null || position === 0) {
			this.insertFirst(item);
		} else {
			let currNode = this.head;
			let prevNode = this.head;
			let i = 0;
			while (i < position && currNode !== null) {
				prevNode = currNode;
				currNode = currNode.next;
				i++;
			}
			if (currNode == null) {
				this.insertLast(item);
			}
			prevNode.next = new _Node(item, currNode);
		}
	}

	find(item) {
		// Start at the head
		let currNode = this.head;
		// If the list is empty
		if (!this.head) {
			return null;
		}
		// Check for the item
		while (currNode.value !== item) {
			/* Return null if it's the end of the list 
               and the item is not on the list */
			if (currNode.next === null) {
				return null;
			} else {
				// Otherwise, keep looking
				currNode = currNode.next;
			}
		}
		// Found it
		return currNode;
	}

	remove(item) {
		// If the list is empty
		if (!this.head) {
			return null;
		}
		// If the node to be removed is head, make the next node head
		if (this.head.value === item) {
			this.head = this.head.next;
			return;
		}
		// Start at the head
		let currNode = this.head;
		// Keep track of previous
		let previousNode = this.head;

		while (currNode !== null && currNode.value !== item) {
			// Save the previous node
			previousNode = currNode;
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log('Item not found');
			return;
		}
		previousNode.next = currNode.next;
	}
	print() {
		if (!this.head) {
			console.log('empty');
		}
		let currNode = this.head;
		while (currNode !== null) {
			console.log(currNode.value);
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log('\n');
		}
	}

	main(data = []) {
		for (let item of data) {
			this.insertLast(item);
		}
	}

	removeDuplicates() {
		// If the list is empty
		if (!this.head) {
			return null;
		}
		// Start at the head
		let currNode = this.head;
		// Keep track of previous
		let previousNode = this.head;

		while (currNode.next !== null) {
			// Save the previous node
			previousNode = currNode;
			currNode = currNode.next;
			if (currNode.value === previousNode.value) {
				previousNode.next = currNode.next;
				if (currNode.next.value === previousNode.value) this.removeDuplicates();
			}
		}
		return;
	}
}

const SLL = new LinkedList();

SLL.main([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]);

function mergeSortLL(list) {
	let array = [];
	let currNode = list.head;
	while (currNode.next !== null) {
		array.push(currNode.value);
		currNode = currNode.next;
	}
	if (array.length <= 1) {
		return array;
	}

	const middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle, array.length);

	left = mergeSort(left);
	right = mergeSort(right);
	array = merge(left, right, array);

	const result = new LinkedList();
	result.main(array);
	result.print();
}

function merge(left, right, array) {
	let leftIndex = 0;
	let rightIndex = 0;
	let outputIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			array[outputIndex++] = left[leftIndex++];
		} else {
			array[outputIndex++] = right[rightIndex++];
		}
	}

	for (let i = leftIndex; i < left.length; i++) {
		array[outputIndex++] = left[i];
	}

	for (let i = rightIndex; i < right.length; i++) {
		array[outputIndex++] = right[i];
	}
	return array;
}

mergeSortLL(SLL);
/*
6. Bucket sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

7. Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

8. Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm. */
