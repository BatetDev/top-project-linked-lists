// linkedList.js
import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  // Adds a new node containing value to the END of the list
  append(value) {
    const newNode = new Node(value);

    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      let current = this._head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
      this._tail = newNode;
    }
  }

  // Adds a new node containing value to the START of the list
  prepend(value) {
    const newNode = new Node(value);

    if (this._head === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      let current = this._head;
      newNode.nextNode = current;
      this._head = newNode;
    }
  }

  // Inserts a new node with the provided value at the given index
  insertAt(value, index) {}

  // Removes the node at the given index
  removeAt(index) {}

  // Returns the total number of nodes in the list
  size() {
    if (this._head === null) {
      return 0;
    } else {
      let current = this._head;
      let count = 0;

      while (current !== null) {
        count++;
        current = current.nextNode;
      }
      return count;
    }
  }

  // Returns the first node in the list
  get head() {
    return this._head;
  }

  // Returns the last node in the list
  get tail() {
    return this._tail;
  }

  // Returns the node at the given index
  at(index) {
    let current = this._head;
    let currentIndex = 0;

    if (index < 0) return null;

    while (current !== null) {
      if (currentIndex === index) {
        return current;
      }
      current = current.nextNode;
      currentIndex++;
    }

    return null;
  }

  // Removes the last element from the list
  pop() {}

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let current = this._head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value) {
    let current = this._head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      } else {
        current = current.nextNode;
        index++;
      }
    }

    return null;
  }

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
