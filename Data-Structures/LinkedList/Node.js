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

module.exports = Node;
