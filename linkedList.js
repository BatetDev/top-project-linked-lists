// linkedList.js
import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing value to the END of the list
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  // Adds a new node containing value to the START of the list
  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      newNode.nextNode = current;
      this.head = newNode;
    }
  }

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {}

  // Removes the node at the given index
  removeAt(index) {}

  // Returns the total number of nodes in the list
  size() {
    if (this.head === null) {
      return 0;
    } else {
      let current = this.head;
      let count = 0;

      while (current !== null) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  }

  // Returns the first node in the list
  head() {}

  // Returns the last node in the list
  tail() {}

  // Returns the node at the given index
  at(index) {}

  // Removes the last element from the list
  pop() {}

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {}

  // Returns the index of the node containing value, or null if not found
  find(value) {}

  // Represents the LinkedList objects as strings
  toString() {
    let current = this.head;
    const result = [];

    while (current !== null) {
      result.push(`( ${current.value} )`);
      current = current.nextNode;
    }

    result.push("null");
    return result.join(" -> ");
  }
}
