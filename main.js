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
list.prepend("orangutan");

console.log(list.toString());
console.log(list.size());

console.log("Head: ", list.head);
console.log("Tail: ", list.tail);

console.log(list.contains("turtle"));
console.log(list.contains("capybara"));

console.log(list.find("turtle"));
console.log(list.find("capybara"));

console.log(list.at(0));
console.log(list.at(8));

console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
