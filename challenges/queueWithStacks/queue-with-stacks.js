const Stack = require("../../Data-Structures/stacksAndQueues/stacks-and-queues").stack;

class PseudoQueue {
  /**
   * [PseudoQueue]
   * @PseudoQueue constructor
   * @property stack1
   * @property stack2
   */
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  /**
   * [enqueue]
   * @method enqueue
   * @param  {*}
   */
  enqueue(value) {
    this.stack1.push(value);
  }

  /**
   * [dequeue]
   * @method dequeue
   * @return {*}
   */
  dequeue() {
    while (this.stack1.top) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}

module.exports = PseudoQueue;
