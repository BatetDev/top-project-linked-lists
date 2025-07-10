// main.js

import { LinkedList } from "./linkedList.js";

// === SECTION: Initialization & Edge Cases ===
const list = new LinkedList();
const emptyList = new LinkedList();

console.log("Empty List:", emptyList.toString());
console.log("Size of Empty List:", emptyList.size());

// === SECTION: Append & Prepend ===
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("\nAfter Appending:");
console.log("List:", list.toString());
console.log("Size:", list.size());

list.prepend("orangutan");
console.log("\nAfter Prepend:");
console.log("List:", list.toString());
console.log("Size:", list.size());

// === SECTION: Head & Tail ===
console.log("\nHead:", list.head.value);
console.log("Tail:", list.tail.value);

// === SECTION: Contains & Find ===
console.log("\nContains 'turtle':", list.contains("turtle"));
console.log("Contains 'capybara':", list.contains("capybara"));

console.log("\nFind 'turtle':", list.find("turtle"));
console.log("Find 'capybara':", list.find("capybara"));

// === SECTION: at(index) ===
console.log("\nat(0):", list.at(0)?.value ?? null);
console.log("at(8):", list.at(8));

// === SECTION: Pop ===
console.log("\nPop:", list.pop());
console.log("After Pop:", list.toString());
console.log("Pop:", list.pop());
console.log("After Pop:", list.toString());

// === SECTION: removeAt(index) ===
list.removeAt(0);
console.log("\nAfter removeAt(0):", list.toString());

list.removeAt(2);
console.log("After removeAt(2):", list.toString());

// === SECTION: insertAt(value, index) ===
list.insertAt("koala", 0);
console.log("\nAfter insertAt('koala', 0):", list.toString());

list.insertAt("jaguar", -1);
console.log("After insertAt('jaguar', -1):", list.toString());

list.insertAt("goat", 3);
console.log("After insertAt('goat', 3):", list.toString());

list.insertAt("hare", 99);
console.log("After insertAt('hare', 99):", list.toString());

list.insertAt("flamingo", 6);
console.log("After insertAt('flamingo', 6):", list.toString());
