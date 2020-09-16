/* eslint-disable no-undef */
const LinkedList = require("../../LinkedList/linked-list");
const zipList = require("../ll-zip");

describe("llizp", () => {
  it("zip the same length", () => {
    const linkedList = new LinkedList();
    linkedList.insert("1");
    linkedList.insert("3");
    linkedList.insert("2");
    const linkedList2 = new LinkedList();
    linkedList2.insert("5");
    linkedList2.insert("9");
    linkedList2.insert("4");
    expect(zipList(linkedList, linkedList2).toString()).toBe("{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> NULL");
  });

  it("zip while first list is less", () => {
    const linkedList = new LinkedList();
    linkedList.insert("1");
    linkedList.insert("3");
    const linkedList2 = new LinkedList();
    linkedList2.insert("5");
    linkedList2.insert("9");
    linkedList2.insert("4");
    expect(zipList(linkedList, linkedList2).toString()).toBe("{1} -> {5} -> {3} -> {9} -> {4} -> NULL");
  });

  it("zip when the first list is more", () => {
    const linkedList = new LinkedList();
    linkedList.insert("1");
    linkedList.insert("3");
    linkedList.insert("2");
    const linkedList2 = new LinkedList();
    linkedList2.insert("5");
    linkedList2.insert("9");
    expect(zipList(linkedList, linkedList2).toString()).toBe("{1} -> {5} -> {3} -> {9} -> {2} -> NULL");
  });
});
