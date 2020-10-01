/* eslint-disable no-undef */

const KTree = require("../k_tree.js");
const KNode = require("../k_node.js");

const fizzBuzzTree = require("../fizz-buzz-tree.js");

describe("Tests", () => {
  const testTree = new KTree();

  testTree.root = new KNode(1);
  testTree.root.children.push(new KNode(2));
  testTree.root.children.push(new KNode(3));
  testTree.root.children[0].children.push(new KNode(4));
  testTree.root.children[0].children.push(new KNode(5));
  testTree.root.children[1].children.push(new KNode(6));
  testTree.root.children[1].children.push(new KNode(7));
  testTree.root.children[1].children.push(new KNode(15));

  fizzBuzzTree(testTree);

  it("test node value", () => {
    expect(testTree.root.value).toBe(1);
  });

  it("test Fizz", () => {
    expect(testTree.root.children[1].value).toBe("Fizz");
  });

  it("test Buzz", () => {
    expect(testTree.root.children[0].children[1].value).toBe("Buzz");
  });

  it("test FizzBuzz", () => {
    expect(testTree.root.children[1].children[2].value).toBe("FizzBuzz");
  });
});
