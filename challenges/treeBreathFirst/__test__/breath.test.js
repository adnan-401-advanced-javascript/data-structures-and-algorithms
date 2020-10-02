/* eslint-disable no-undef */
const Node = require("../Node");
const BinaryTree = require("../tree");

describe("Tests", () => {
  it("test", () => {
    const root = new Node(2);
    const tree = new BinaryTree(root);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    const result = tree.breadthFirst();
    expect(result.toString()).toBe("2,7,5,2,6,9,5,11,4");
  });
});
