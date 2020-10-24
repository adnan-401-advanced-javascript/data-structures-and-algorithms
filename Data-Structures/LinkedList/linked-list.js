const Node = require("./Node.js");

class LinkedList {
  /**
   * @class LinkedList
   * @property head
   */
  constructor(root = null) {
    this.head = root;
  }

  /**
   * [insert methd]
   * @method insert
   * @param  {*} value
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
   * @param  {*} value
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

  /**
   * [append -> insert at the tail]
   * @method append
   * @param  {*} value
   * @return {LinkedList}
   */
  append(value) {
    return this.insert(value);
  }

  /**
   * [insertBefore]
   * @method insertBefore
   * @param  {*}  value
   * @param  {*}  newValue
   * @return {LinkedList}
   */
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let prev;
    while (currentNode) {
      if (currentNode.value === value) {
        if (!prev) {
          newNode.next = currentNode;
          this.head = newNode;
          return this;
        }
        newNode.next = currentNode;
        prev.next = newNode;
        return this;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }
    throw new Error(`${value} not found`);
  }

  /**
   * [insertAfter description]
   * @method insertAfter
   * @param  {*}    value
   * @param  {*}    newValue
   * @return {LinkedList}
   */
  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }
    throw new Error(`${value} not found`);
  }

  /**
   * return the n-th element of the tail
   * @method kthFromEnd
   * @param  {number}   k
   * @return {*}
   */

  kthFromEnd(k) {
    let counter = 0;
    let current = this.head;
    while (current) {
      counter += 1;
      current = current.next;
    }
    if (k > counter - 1) {
      throw new Error("out of range");
    }
    current = this.head;
    const index = (counter - k) - 1;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }
    return current.value;
  }

  isPalindrome() {
    let currentNode = this.head;
    const arr = [];
    if (!currentNode) return true;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    currentNode = this.head;
    let i = 0;
    while (i <= Math.floor(arr.length / 2)) {
      i += 1;
      const e = arr.pop().trim();
      if (e !== currentNode.value) return false;
      currentNode = currentNode.next;
    }
    return true;
  }
}

module.exports = LinkedList;
