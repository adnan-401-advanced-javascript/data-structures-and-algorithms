const LinkedList = require("./LinkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size); // bucket
  }

  hash(key) {
    // return hash Index
    const charArr = key.split("");
    return charArr.reduce((p, n) => p + n.charCodeAt(0), 0) * 599 % this.size; // eslint-disable-line
  }

  add(key, value) {
    // Linked List to represent the value for each key in the bucket
    const hashIndex = this.hash(key);
    console.log("hashIndex: ", hashIndex);
    if (!this.entries[hashIndex]) {
      // create a new one
      this.entries[hashIndex] = new LinkedList();
    }

    const entry = { [key]: value };
    this.entries[hashIndex].append(entry); // LinkedList append method
  }
}

// example
const myHash = new HashTable(1024);
myHash.add("Laith", 123);
myHash.add("Yahya", "ABu Khalil");
myHash.add("Shela", "Ahmad Shela");
myHash.add("Shela", "Ahmad Shela222");

console.log(myHash);
console.log("-----------------------");
console.log(myHash.entries[318]);
console.log("-----------------------");

console.log(myHash.entries[395]);
console.log(myHash.entries[395].head.value);
console.log(myHash.entries[395].head.next);
console.log(myHash.entries[395].head.next.value);
