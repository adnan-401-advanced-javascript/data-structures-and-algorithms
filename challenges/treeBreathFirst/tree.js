/* eslint-disable no-use-before-define, no-unused-expressions, no-underscore-dangle, no-param-reassign, consistent-return */
const Queue = require("../../Data-Structures/stacksAndQueues/stacks-and-queues.js").queue;

class BinaryTree {
/**
 * @class BinaryTree
 * @prop root {Node}
 */
  constructor(root = null) {
    this.root = root;
    this.result = [];
  }

  /**
   * [breadthFirst]
   * @method breadthFirst
   * @return {array}     array of breadthFirst
   */
  breadthFirst() {
    const queue = new Queue();
    const result = [];
    _start(this.root);
    function _start(root) {
      queue.enqueue(root);
      while (!queue.isEmpty()) {
        const node = queue.dequeue();
        result.push(node.value);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
      }
    }
    return result;
  }
}

module.exports = BinaryTree;
