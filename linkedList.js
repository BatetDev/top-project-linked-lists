// linkedList.js
import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing value to the END of the list
  append(value) {}

  // Adds a new node containing value to the START of the list
  prepend(value) {}

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {}

  // Removes the node at the given index
  removeAt(index) {}

  // Returns the total number of nodes in the list
  size() {}

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

  // Represents your LinkedList objects as strings
  toString() {}
}
