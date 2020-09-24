const PseudoQueue = require("../queue-with-stacks.js");

describe("Queue Tests", () => {
  it("Can successfully push create a queue", () => {
    const queue = new PseudoQueue();
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
  });
});
