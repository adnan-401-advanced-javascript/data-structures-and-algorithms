/* eslint-disable max-classes-per-file */

class Node {
  /**
   * @class Node
   * @property  {*}    value
   * @property  {Node=}
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  /**
  * @class Stack
  * @property  {*}   top
   */
  constructor() {
    this.top = null;
  }

  /**
   * push to stack
   * @method push
   * @param  {*} value
   */
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  /**
 * pop from stock
 * @method pop
 * @return {*}
 */
  pop() {
    if (this.top) {
      const temp = this.top;
      this.top = this.top.next;
      return temp.value;
    }
    throw new Error("empty stack");
  }

  /**
   * return peek of the stack
   * @method peek
   * @return {*}
   */
  peek() {
    if (this.top) { return this.top.value; }
    throw new Error("empty stack");
  }

  /**
 * [is the stack Empty]
 * @method isEmpty
 * @return {Boolean}
 */
  isEmpty() {
    return !this.top;
  }
}

class Queue {
  /**
  * @class Queue
  * @property  {*}  front
  * @property  {*}  rear
   */
  constructor() {
    this.front = null;
    this.rear = null; // same as tai
  }

  /**
 * [enqueue]
 * @method enqueue
 * @param  {*} value
 */
  enqueue(value) {
    if (!this.front) {
      const node = new Node(value);
      this.front = node;
      this.rear = node;
    } else {
      const node = new Node(value);
      this.rear.next = node;
      this.rear = node;
    }
  }

  /**
   * [dequeue]
   * @method dequeue
   * @return {*}
   */
  dequeue() {
    if (!this.front) {
      throw new Error("empty queue");
    }
    const temp = this.front;
    this.front = this.front.next;
    return temp.value;
  }

  /**
 * [peek]
 * @method peek
 * @return {*}
 */
  peek() {
    if (this.front) { return this.front.value; }
    throw new Error("empty queue");
  }

  /**
 * [is the stack Empty]
 * @method isEmpty
 * @return {Boolean}
 */
  isEmpty() {
    return !this.front;
  }
}

module.exports.node = Node;
module.exports.stack = Stack;
module.exports.queue = Queue;
