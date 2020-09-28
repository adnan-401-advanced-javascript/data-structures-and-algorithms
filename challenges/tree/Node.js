class Node {
/**
 * @class Node
 * @param  {*}    value
 * @param  {Node}   left=null default
 * @param  {Node}   right=null default
 */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;
