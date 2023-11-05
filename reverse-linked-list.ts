// reverse-linked-list.ts

class ListNode {
  constructor(public val: number, public next: ListNode | null = null) {}
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const reversedList = reverseLinkedList(list);
console.log(reversedList);
