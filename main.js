// main.js
import { LinkedList } from "./linkedList.js";

// Test case
const list = new LinkedList();

// Edge case
const emptyList = new LinkedList();
console.log(emptyList.toString());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
