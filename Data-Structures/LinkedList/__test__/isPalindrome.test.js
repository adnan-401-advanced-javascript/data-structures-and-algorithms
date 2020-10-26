/* eslint-disable no-undef */

const LinkedList = require("../linked-list.js");

describe("linked list module", () => {
  it("test isPalindrome of an empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    expect(newLinkedList.isPalindrome()).toBe(true);
  });


/*
  it("test true isPalindrome of non empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    newLinkedList.append("t");
    newLinkedList.append("a");
    newLinkedList.append("c");
    newLinkedList.append("o");
    newLinkedList.append("c");
    newLinkedList.append("a");
    newLinkedList.append("t");
    expect(newLinkedList.findMiddle()).toBe("c");
  //  expect(newLinkedList.isPalindrome()).toBe(true);
  });

*/

/*
  it("test true isPalindrome of non empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    newLinkedList.append("t");
    newLinkedList.append("a");
    newLinkedList.append("c");
    newLinkedList.append("o");
    newLinkedList.append("c");
    newLinkedList.append("a");
    newLinkedList.append("t");
    newLinkedList.reverseUsingItartion();
    expect(newLinkedList.toString()).toBe("c");
  //  expect(newLinkedList.isPalindrome()).toBe(true);
  });

*/
  /*
  it("test false isPalindrome of non empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    newLinkedList.append("h");
    newLinkedList.append("o");
    newLinkedList.append("u");
    newLinkedList.append("s");
    newLinkedList.append("e");
    expect(newLinkedList.isPalindrome()).toBe(false);
  });
  */
  /*
  it("test false isPalindrome of non empty LinkedList", () => {
    const newLinkedList = new LinkedList();
    newLinkedList.append("h");
    newLinkedList.append("o");
    newLinkedList.append("u");
    newLinkedList.append("s");
    newLinkedList.append("e");
    expect(newLinkedList.kthFromEnd(2)).toBe("u");
  });
  */

  it("test false isPalindrome of non empty LinkedList", () => {
    const l1 = new LinkedList();
    l1.append("1");
    l1.append("2");
    l1.append("4");

    const l2 = new LinkedList();
    l2.append("1");
    l2.append("3");
    l2.append("4");

    const merged = LinkedList.mergeTwoLists(l1, l2);
    expect(merged.toString()).toBe(true);
  });
});
