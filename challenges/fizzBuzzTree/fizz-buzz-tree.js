/* eslint-disable no-use-before-define, no-underscore-dangle, no-param-reassign */
const KTree = require("./k_tree.js");

/**
 * @method fizzBuzzTree
 * @param  {tree}     tree tree you want to fizzBuzz
 * @return {newTree}          new fuzzed and buzzed Tree
 */
const fizzBuzzTree = (tree) => {
  const newRoot = tree.root;
  FizzBuzz(newRoot);
  return new KTree(newRoot);
};

function FizzBuzz(treeRoot) {
  _traverse(treeRoot);
  treeRoot.value = getFizzBuzz(treeRoot.value);
  function _traverse(root) {
    if (root.children.length) {
      for (let i = 0; i < root.children.length; i += 1) {
        root.children[i].value = getFizzBuzz(root.children[i].value);
        _traverse(root.children[i]);
      }
    }
  }
}

function getFizzBuzz(value) {
  if (!(value % 5) && !(value % 3)) {
    return "FizzBuzz";
  }
  if (!(value % 3)) {
    return "Fizz";
  }
  if (!(value % 5)) {
    return "Buzz";
  }
  return value;
}

module.exports = fizzBuzzTree;
