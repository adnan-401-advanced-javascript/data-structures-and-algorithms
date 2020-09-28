/* eslint-disable no-unused-expressions, no-underscore-dangle, no-param-reassign, consistent-return */
const Node = require("./Node.js");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
    this.result = [];
  }

  // Root - Left - Right
  preOrder(node) {
    this.result.push(node.value);
    node.left && this.preOrder(node.left);
    node.right && this.preOrder(node.right);
  }

  // Left - Root - Right
  inOrder(root) {
    root.left && this.inOrder(root.left);
    this.result.push(root.value);
    root.right && this.inOrder(root.right);
  }

  // Left - Right - Root
  postOrder(node) {
    node.left && this.postOrder(node.left);
    node.right && this.postOrder(node.right);
    this.result.push(node.value);
  }

  add(newValue) {
    const newNode = new Node(newValue);

    const _add = (node) => {
      if (node.value < newValue && node.right) {
        _add(node.right);
      } else if (node.value > newValue && node.left) {
        _add(node.left);
      } else if (node.value < newValue) {
        console.log("add", newValue, "to right of", node.value);
        node.right = newNode;
      } else if (node.value > newValue) {
        console.log("add", newValue, "to left of", node.value);
        node.left = newNode;
      }
    };
    _add(this.root);
  }

  contains(searchValue) {
    let isExist = false;
    const _traverse = (node) => {
      if (searchValue < node.value && node.left) {
        console.log(searchValue, " < ", node.value, " so go left");
        _traverse(node.left);
      } else if (searchValue > node.value && node.right) {
        console.log(searchValue, " > ", node.value, " so go right");
        _traverse(node.right);
      } else if (node.value === searchValue) {
        isExist = true;
        console.log("check", node.value, "===", searchValue, node.value === searchValue);
      }
    };
    _traverse(this.root);
    return isExist;
  }
}

module.exports = BinaryTree;
