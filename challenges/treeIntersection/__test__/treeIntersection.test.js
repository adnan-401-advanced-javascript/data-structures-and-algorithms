/* eslint-disable no-undef */
const treeIntersection = require("../tree-intersection");
const Node = require("../../tree/Node");
const Tree = require("../../tree/tree");

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

const tree1 = new Tree(one);
const tree2 = new Tree(six);

describe("tree-intersection Module", () => {
  it("tree_intersection Feunction", () => {
    const expected = [6, 7, 8, 9];
    const results = treeIntersection(tree1, tree2);
    expect(results).toEqual(expected);
  });
});
