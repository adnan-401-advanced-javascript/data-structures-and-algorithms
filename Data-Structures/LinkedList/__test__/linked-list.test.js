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

        it('test append', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
          newLinkedList.append(value);
          expect(newLinkedList.head.value === value);
          expect(newLinkedList.head.next).toBe(null);
        });

        it('test insertBefore an empty', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
          try {
            newLinkedList.insertBefore(1, value);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
           expect(error).toHaveProperty('message', '1 not found');
          }
        });

        it('test insertBefore an element', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
            newLinkedList.append(1);
            newLinkedList.insertBefore(1, value);
            expect(newLinkedList.head.value === value);
            expect(newLinkedList.head.next).not.toBe(null);
            expect(newLinkedList.head.next.value).toBe(1);
        });


        it('test insertBefore in the middle', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
            newLinkedList.append(1);
            newLinkedList.append(2);
            newLinkedList.insertBefore(2, value);
            expect(newLinkedList.head.value === 1);
            expect(newLinkedList.head.next.value === value);
           expect(newLinkedList.head.next.next.value).toBe(2);
           expect(newLinkedList.head.next.next.next).toBe(null);
        });

        it('test insertAfter not found', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
          try {
            newLinkedList.insertAfter(1, value);
          } catch (error) {
            expect(error).toBeInstanceOf(Error);
           expect(error).toHaveProperty('message', '1 not found');
          }
        });

        it('test insertAfter two elements', () => {
          const newLinkedList = new LinkedList();
          const value = "adnan";
          newLinkedList.append(1);
          newLinkedList.append(2);
          newLinkedList.insertAfter(2, value);
          expect(newLinkedList.head.value === 1);
          expect(newLinkedList.head.next.value === 2);
          expect(newLinkedList.head.next.next.value).toBe(value);
          expect(newLinkedList.head.next.next.next).toBe(null);
        });

  it('test kthFromEnd of 0', () => {
    const newLinkedList = new LinkedList();
    const value = "adnan";
    newLinkedList.append(value);
    const returned = newLinkedList.kthFromEnd(0);
    expect(returned === value);
  });

  it('test kthFromEnd of multiple elements', () => {
    const newLinkedList = new LinkedList();
    const value = "adnan";
    const value1 = "adnan1";
    const value2 = "adnan2";
    const value3 = "adnan3";
    newLinkedList.append(value);
    newLinkedList.append(value1);
    newLinkedList.append(value1);
    newLinkedList.append(value2);
    newLinkedList.append(value3);
    const returned = newLinkedList.kthFromEnd(3);
    expect(returned === value3);
  });

  it('test kthFromEnd out of range', () => {
    const newLinkedList = new LinkedList();
    const value = "adnan";
    newLinkedList.append(value);
    try {
      newLinkedList.kthFromEnd(1);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'out of range');
    }

  });

});
