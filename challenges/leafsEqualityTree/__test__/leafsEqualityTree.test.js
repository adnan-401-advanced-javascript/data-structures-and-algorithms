/* eslint-disable no-undef */
const Node = require("../Node");
const BinaryTree = require("../tree");

describe("Tests", () => {
  it("test equality true", () => {
    const node1 = new Node(5);
    const tree1 = new BinaryTree(node1);
    tree1.add(4);
    tree1.add(3);
    tree1.add(2);
    tree1.add(1);
    const node2 = new Node(5);
    const tree2 = new BinaryTree(node2);
    tree2.add(4);
    expect(BinaryTree.isEqualLeafs(tree1, tree2)).toBe(true);
  });
  it("test equality false", () => {
    const node1 = new Node(5);
    const tree1 = new BinaryTree(node1);
    tree1.add(4);
    tree1.add(7);
    const node2 = new Node(5);
    const tree2 = new BinaryTree(node2);
    tree2.add(4);
    expect(BinaryTree.isEqualLeafs(tree1, tree2)).toBe(false);
  });
});
