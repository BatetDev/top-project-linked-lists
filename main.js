// main.js
import { LinkedList } from "./linkedList.js";

// Test case
const list = new LinkedList();

// Edge case: empty list
const emptyList = new LinkedList();
console.log(emptyList.toString());
console.log(list.size());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size());

// prepend
list.prepend("llama");
list.prepend("orangutan");

console.log(list.toString());
console.log(list.size());

console.log(list.head);
