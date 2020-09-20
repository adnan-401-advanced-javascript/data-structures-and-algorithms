/* eslint-disable no-undef */

const Stack = require("../stacks-and-queues").stack;
const Queue = require("../stacks-and-queues").queue;

describe("Stack Tests", () => {
  it("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push("adnan");
    expect(stack.peek()).toBe("adnan");
  });

  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push("adnan1");
    stack.push("adnan2");
    expect(stack.peek()).toBe("adnan2");
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push("adnan");
    expect(stack.pop()).toBe("adnan");
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push("adnan");
    stack.push("adnan2");
    stack.pop();
    stack.pop();
    expect(stack.isEmpty());
  });

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push("adnan");
    stack.push("adnan2");
    expect(stack.peek()).toBe("adnan2");
  });

  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Calling pop on empty stack raises exception", () => {
    try {
      const stack = new Stack();
      stack.pop();
    } catch (e) {
      expect(e.message).toBe("empty stack");
    }
  });

  it("Calling pop peek on empty stack raises exception", () => {
    try {
      const stack = new Stack();
      stack.peek();
    } catch (e) {
      expect(e.message).toBe("empty stack");
    }
  });
});

describe("Queue Tests", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue("adnan");
    expect(queue.peek()).toBe("adnan");
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue("adnan");
    queue.enqueue("adnan2");
    expect(queue.peek()).toBe("adnan");
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue("adnan");
    expect(queue.dequeue()).toBe("adnan");
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue("adnan");
    expect(queue.peek()).toBe("adnan");
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue("adnan");
    queue.enqueue("adnan2");
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("Calling dequeue on empty queue raises exception", () => {
    try {
      const queue = new Queue();
      queue.dequeue();
    } catch (e) {
      expect(e.message).toBe("empty queue");
    }
  });

  it("Calling peek on empty queue raises exception", () => {
    try {
      const queue = new Queue();
      queue.peek();
    } catch (e) {
      expect(e.message).toBe("empty queue");
    }
  });
});
