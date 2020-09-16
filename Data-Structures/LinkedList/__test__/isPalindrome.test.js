/* eslint-disable no-undef */

const LinkedList = require("../linked-list.js");

describe("linked list module", () => {
  it("test isPalindrome of an empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    expect(newLinkedList.isPalindrome()).toBe(true);
  });

  it("test true isPalindrome of non empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    newLinkedList.append("t");
    newLinkedList.append("a");
    newLinkedList.append("c");
    newLinkedList.append("o");
    newLinkedList.append("c");
    newLinkedList.append("a");
    newLinkedList.append("t");
    expect(newLinkedList.isPalindrome()).toBe(true);
  });

  it("test false isPalindrome of non empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    newLinkedList.append("h");
    newLinkedList.append("o");
    newLinkedList.append("u");
    newLinkedList.append("s");
    newLinkedList.append("e");
    expect(newLinkedList.isPalindrome()).toBe(false);
  });
});
