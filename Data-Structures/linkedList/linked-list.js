const Node = require("./Node.js");

class LinkedList {
  /**
   * [linked list constructor]
   * @method constructor
   */
  constructor() {
    this.head = null;
  }

  /**
   * [insert methd]
   * @method insert
   * @param  {typeless} value
   */
  insert(value) { // eslint-disable-line
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  /**
   * check if LinkedList includes this value
   * @method includes
   * @param  {typeless} value
   * @return {boolean}
   */
  includes(value) { // eslint-disable-line
    if (!this.head) return false;

    let currentNode = this.head;
    if (!currentNode.next) return currentNode.value === value;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) return true;
    }
    return false;
  }

  /**
   * [toString to print the linked list]
   * @method toString
   * @return {String}
   */
  toString() {
    let result = "";
    if (!this.head) {
      result = "Empty";
    } else {
      let node = this.head;
      result = `{${node.value}}`;
      while (node.next) {
        node = node.next;
        result += ` -> {${node.value}}`;
      }
      result += " -> NULL";
    }
    return result;
  }
}

module.exports = LinkedList;
