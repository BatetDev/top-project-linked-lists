// linkedList.js
import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

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

  insertAt(value, index) {
    if (index <= 0) {
      this.prepend(value);
      return;
    }

    const size = this.size();
    if (index >= size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const previousNode = this.at(index - 1);

    if (previousNode.nextNode === this._tail) {
      this._tail = newNode;
    }

    newNode.nextNode = previousNode.nextNode;
    previousNode.nextNode = newNode;
  }

  // Removes the node at the given index and returns removed value
  removeAt(index) {
    // Edge cases
    if (index < 0) return null;
    if (this._head === null) return null;

    // Special case: remove first node
    if (index === 0) {
      const value = this._head.value;
      this._head = this._head.nextNode;

      if (this._head === null) {
        this._tail = null;
      }

      return value;
    }

    // General case: find previous node
    const previousNode = this.at(index - 1);

    // If no previous node or nothing to remove, return null
    if (!previousNode || !previousNode.nextNode) {
      return null;
    }

    const nodeToRemove = previousNode.nextNode;
    const value = nodeToRemove.value;

    // Update links
    previousNode.nextNode = nodeToRemove.nextNode;

    // If removing the last node, update tail
    if (nodeToRemove.nextNode === null) {
      this._tail = previousNode;
    }

    return value;
  }

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

  // Removes the last element from the list and returns it's value
  pop() {
    // Edge cases:
    if (this._head === null) return null;
    if (this._head === this._tail) {
      const value = this._head.value;
      this._head = null;
      this._tail = null;
      return value;
    }

    let current = this._head;

    // Traverse to second-to-last node
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    const value = current.nextNode.value;

    // Disconnect last node
    current.nextNode = null;
    this._tail = current;

    return value;
  }

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

  /**
   * Returns a string representation of the list.
   * Format: "( value ) -> ( value ) -> null"
   */
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
