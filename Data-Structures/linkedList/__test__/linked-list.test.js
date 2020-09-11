const LinkedList = require("../linked-list.js");

describe('linked list module', () => {

        it('test an empty LinkedList', () => {
          const newLinkedList = new LinkedList();
          expect(newLinkedList.head).toBe(null);
        });

        it('test insert to an empty LinkedList', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
          newLinkedList.insert(value);
          expect(newLinkedList.head.value === value);
          expect(newLinkedList.head.next).toBe(null);
        });

        it('test insert to non empty LinkedList', () => {
          const newLinkedList = new LinkedList();
          const value1 = "adnan1";
          newLinkedList.insert(value1);
          const value2 = "adnan2";
          newLinkedList.insert(value2);
          const value3 = "adnan3";
          newLinkedList.insert(value3);
          expect(newLinkedList.head.next.next.value === value3);
          expect(newLinkedList.head.next.next.next).toBe(null);
        });

        it('test includes of an empty LinkedList', () => {
          const newLinkedList = new LinkedList();
          expect(newLinkedList.includes("something")).toBe(false);
        });

        it('test sucsess of includes of one node LinkedList', () => {
          const newLinkedList = new LinkedList();
          const value1 = "adnan1";
          newLinkedList.insert(value1);
          expect(newLinkedList.includes(value1)).toBe(true);
        });

        it('test success of includes of multiple nodes LinkedList', () => {
          const newLinkedList = new LinkedList();
          const value1 = "adnan1";
          newLinkedList.insert(value1);
          const value2 = "adnan2";
          newLinkedList.insert(value2);
          expect(newLinkedList.includes(value2)).toBe(true);
        });


        it('test failled of includes of multiple nodes LinkedList', () => {
          const newLinkedList = new LinkedList();
          const value1 = "adnan1";
          newLinkedList.insert(value1);
          const value2 = "adnan2";
          newLinkedList.insert(value2);
          expect(newLinkedList.includes("something")).toBe(false);
        });

        it('test toString() of an empty LinkedList', () => {
          const newLinkedList = new LinkedList();
          expect(newLinkedList.toString()).toBe("Empty");
        });

        it('test toString() of non empty LinkedList', () => {
          const newLinkedList = new LinkedList();
          const value1 = "adnan1";
          newLinkedList.insert(value1);
          const value2 = "adnan2";
          newLinkedList.insert(value2);
          expect(newLinkedList.toString()).toBe("{adnan1} -> {adnan2} -> NULL");
        });


});
