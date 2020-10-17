/* eslint-disable consistent-return */
const LinkedList = require("../LinkedList/linked-list");

module.exports = class HashTable {
  /**
   * @class hashtable
   * @param  {number}    size
   */
  constructor(size) {
    this.size = size;
    this.entries = new Array(size); // bucket
  }

  /**
 * @method hash
 * @param  {number} key
 * @return {index}     return hash Index
 */
  hash(key) {
    // return hash Index
    const charArr = key.split("");
    return charArr.reduce((p, n) => p + n.charCodeAt(0), 0) * 599 % this.size; // eslint-disable-line
  }

  /**
 * [add description]
 * @method add
 * @param  {key} key
 * @param  {value} value
 */
  add(key, value) {
    // Linked List to represent the value for each key in the bucket
    const hashIndex = this.hash(key);
    if (!this.entries[hashIndex]) {
      // create a new one
      this.entries[hashIndex] = new LinkedList();
    }

    const entry = { [key]: value };
    this.entries[hashIndex].append(entry); // LinkedList append method
  }

  /**
 * [contains description]
 * @method contains
 * @param  {*} key
 * @return {boolean}     isExists
 */
  contains(key) {
    const index = this.hash(key);
    return this.entries[index];
  }

  /**
 * [get description]
 * @method get
 * @param  {*} key
 * @return {array}     array of the values
 */
  get(key) {
    const results = [];
    const index = this.hash(key);
    const entry = this.entries[index];
    if (entry) {
      let currentNode = entry.head;
      results.push(currentNode.value[key]);
      while (currentNode.next) {
        currentNode = currentNode.next;
        results.push(currentNode.value[key]);
      }
      return results;
    }
  }
};
