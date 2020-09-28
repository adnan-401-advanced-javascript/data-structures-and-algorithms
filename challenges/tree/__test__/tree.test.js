const Node = require("../Node");
const BinaryTree = require("../tree");

describe("Tests", () => {
  it("test contains", () => {
    const node = new Node(5);
    const tree = new BinaryTree(node);
    tree.add(4);
    expect(tree.contains(4)).toBe(true);
  });

  it("test contains", () => {
    const node = new Node(5);
    const tree = new BinaryTree(node);
    tree.add(4);
    tree.add(5);
    tree.add(6);

    expect(tree.contains(6)).toBe(true);
  });

  it("test inOrder", () => {
    const node = new Node(5);
    const tree = new BinaryTree(node);
    tree.add(4);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.inOrder(tree.root);
    expect(tree.result.toString()).toBe("1,2,3,4,5,6,7");
  });

  it("test preOrder", () => {
    const node = new Node(5);
    const tree = new BinaryTree(node);
    tree.add(4);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.preOrder(tree.root);
    expect(tree.result.toString()).toBe("5,4,3,2,1,7,6");
  });

  it("test postOrder", () => {
    const node = new Node(5);
    const tree = new BinaryTree(node);
    tree.add(4);
    tree.add(3);
    tree.add(7);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.postOrder(tree.root);
    expect(tree.result.toString()).toBe("1,2,3,4,6,7,5");
  });
});
